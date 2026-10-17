# Simulate a week of growth. A seed makes experiments repeatable.
begin
  seed = Integer(ARGV.fetch(0, '42'), 10)
rescue ArgumentError
  warn 'Seed must be a whole number.'
  exit 1
end
random = Random.new(seed)
plants = { 'Basil' => 0, 'Mint' => 0, 'Sunflower' => 0 }
puts "Garden simulation (seed #{seed})"
7.times do |day|
  rain = random.rand(0..2)
  plants.transform_values! { |height| height + 1 + rain }
  puts "Day #{day + 1}: rain bonus #{rain}"
end
plants.each do |name, height|
  puts "#{name.ljust(10)} #{'|' * height} #{height} cm"
end
