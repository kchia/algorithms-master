Object-Oriented Design Steps

Step 1: Define use cases
- Who, how, where, when, what, why?

Step 2: Define the core objects
- Examples: Table, Guest, Party, Order, Meal, Employee, Server, and Host.

Step 3: Analyze the relationships
- Which objects are members of which other objects?
- Do objects inherit from any others?
- Are relationships many-to-many or one-to-one or one-to-many?
- Examples:
  - Party should have an array of Guests.
  - Server and Host inherit from Employee.
  - Each Table has one Party, but each Party may have multiple Tables. 
  - There is one Host for the Restaurant.

Step 4: Investigate actions
  - Example: a Party walks into the Restaurant, and a Guest requestsa Table from the Host. The Host looks up the Reservation and, if it exists, assigns the Party to a Table.Otherwise, the Party is added to the end of the list. When a Party leaves, the Table is freed and assigned to a new Party in the list.

Design Pattern: Singletons
- The Singleton pattern ensures that a class has only one instance and ensures access to the instance through the application. It can be useful in cases where you have a "global" object with exactly one instance.
- It should be noted that many people dislike the Singleton design pattern, even calling it an "anti-pattern." One reason for this is that it can interfere with unit testing.


Design Pattern: Factory
