# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water'


#SIDE-NOTE:
# I had to crack open some of the Ruby lectures and my notes. I am getting everything all mixed up wtih javascript some how. It's been a while and it kind of left my mind a bit.

#PROBLEM:
# To get started we need to make a function named, ithurts_Alot.
# The parameters of the function will be named array and letter.
# The argument that I will pass through is an array of strings and a singular letter inside of a string.
# We need to Iterate through the array with the letter as a filter...
# We can use .select! to iniciate a change from the original array. Using this method will filter out only the desired output.

#beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water'



# def ithurst_Alot array, letter
#   array.select! {|let| let.include?(letter) } 
  #the ! character changes the accessor and allows it to mutate.
# end

# p ithurst_Alot beverages_array, letter_o
# ["coffee", "soda water"]
# p ithurst_Alot beverages_array, letter_t
# ["tea", "water", "soda water"]




# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays' => I didnt see this the first time around and I paid for it the hard way. 

# us_states was an undefined local variable and not in my scope since I created a method before I declared it. As always simple mistakes always hurt the most.
# As of now i've reworked this problem a couple times now and its starting to give me a headache. 
# I started by creating a method before the array with the hash was defined, I couldn't understand why my method wasn't working when I would pass us_states as the argument. 

# Create a method called thefirst_order and pass in an array as the parameter.
# I used DOT notation with values to find the values associated with their keys, then flatten the array so they are not embedded arrays in the overall array. 
# Then, add sort after we flatten so the whole array is being sorted alphabetically!

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }

# def thefirst_order array
  
#   array.values.flatten.sort
# end
# p thefirst_order(us_states)


# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# class Bike 
#   attr_accessor :model, :wheels, :current_speed

#   def initialize(model)
#     @model = model
#     @wheels = 2
#     @current_speed = 0
#   end
#   def bike_info 
#     "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
#   end
# end
# p trek = Bike.new('Trek') 
# p trek.bike_info
#<Bike:0x00007fa6ac0b17d8 @model="Trek", @wheels=2, @current_speed=0>
# "The Trek bike it has two wheels and is going zero mph."
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
#I like this one, I haven't played around with code like this since our text based game projects. 
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike 
  attr_accessor :model, :wheels, :current_speed, :pedal_faster,

  def initialize(model, current_speed)
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def bike_info 
    "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
  end
  def pedal_faster(number)
    @current_speed = number
    end
  def brake(number)
    if @current_speed > number
    @current_speed = @current_speed - number
    elsif @current_speed < number
      @current_speed = 0
  end
  end
end

p my_bike = Bike.new
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(28)
p my_bike.brake(5)
p my_bike.brake(25)

