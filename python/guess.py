"""A short guessing game: loops, input validation, and random numbers."""
import random


def main():
    secret = random.randint(1, 20)
    guesses = set()
    print("Guess a whole number from 1 to 20. You have 5 attempts. q quits.")
    while len(guesses) < 5:
        try:
            raw = input("Your guess: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nGoodbye!")
            return
        if raw.lower() == "q":
            print("Goodbye!")
            return
        try:
            number = int(raw)
        except ValueError:
            print("Please enter a whole number.")
            continue
        if not 1 <= number <= 20:
            print("Stay between 1 and 20.")
            continue
        if number in guesses:
            print("Already tried! No attempt used.")
            continue
        guesses.add(number)
        if number == secret:
            print(f"You found it in {len(guesses)} attempt(s)!")
            return
        print("Too low." if number < secret else "Too high.")
    print(f"Out of attempts. The number was {secret}.")


if __name__ == "__main__":
    main()
