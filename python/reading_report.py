"""Aggregate a small CSV reading log with the standard library."""
import csv
import sys
from collections import Counter
from pathlib import Path


def summarize(path):
    totals = Counter()
    with path.open(encoding="utf-8", newline="") as source:
        rows = csv.DictReader(source)
        if rows.fieldnames != ["day", "pages"]:
            raise ValueError("CSV header must be day,pages")
        for line, row in enumerate(rows, start=2):
            day = (row.get("day") or "").strip()
            raw = (row.get("pages") or "").strip()
            if None in row or not day or not raw.isascii() or not raw.isdecimal():
                raise ValueError(f"Line {line}: provide a day and non-negative integer pages")
            totals[day] += int(raw)
    return totals


def main():
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).parent / "data" / "reading.csv"
    try:
        totals = summarize(path)
    except (OSError, ValueError, csv.Error) as error:
        print(f"Cannot read log: {error}", file=sys.stderr)
        return 1
    total = sum(totals.values())
    print(f"Total pages: {total}")
    print(f"Average per logged day: {total / len(totals) if totals else 0:.1f}")
    for day, pages in totals.items():
        # One block per 5 pages; cap the display for unusually large values.
        print(f"{day:>3}: {'#' * min(pages // 5, 40)} ({pages})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
