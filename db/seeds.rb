5.times do 
    Blog.create(title: Faker::Artist.name, date_posted: Faker::Date.between(from: '2014-09-23', to: '2020-09-25'), complete: false)
end 
puts 'data seeded'