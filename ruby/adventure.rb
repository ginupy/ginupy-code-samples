# A tiny branching story: hashes, loops, and case expressions.
rooms = {
  'garden' => { text: 'You are in a moonlit garden.', exits: { 'east' => 'shed' } },
  'shed' => { text: 'A brass key hangs beside a locked chest.', exits: { 'west' => 'garden' } }
}
location = 'garden'
has_key = false
puts 'Moonlit garden. Commands: look, east, west, take, open, quit.'
puts rooms[location][:text]
loop do
  print '> '
  line = $stdin.gets
  break if line.nil?

  command = line.strip.downcase
  case command
  when 'quit'
    break
  when 'look'
    puts rooms[location][:text]
    puts "Exits: #{rooms[location][:exits].keys.join(', ')}"
  when 'take'
    if location == 'shed'
      puts(has_key ? 'You already have the key.' : 'You take the brass key.')
      has_key = true
    else
      puts 'There is no key here.'
    end
  when 'open'
    if location != 'shed'
      puts 'There is no chest here.'
    elsif !has_key
      puts 'The chest is locked. Try taking the key.'
    else
      puts 'You found a packet of glowing seeds. You win!'
      break
    end
  else
    destination = rooms[location][:exits][command]
    if destination
      location = destination
      puts rooms[location][:text]
    else
      puts 'Try look, east, west, take, open, or quit.'
    end
  end
end
puts 'Thanks for exploring!'
