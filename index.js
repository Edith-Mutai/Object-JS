//1)  Create a User object with properties like name, stepsWalked (an array of daily steps), 
// and a method totalSteps() that calculates and returns the total number of steps walked. 
// Add another method averageSteps() that returns the average steps per day.

                      //Inputs
                      // a) Name of the user
                      // b) Array of steps walked
                        
                      //Pseudocode;
// 1. Create a function constructor called User, with properties name and stepsWalked.
// 2. Add a method totalSteps() that calculates the total number of steps walked for user object.
// 3. use .reduce() to iterate the array and add the steps.
// 4. Define another method averageSteps() for user object to get average steps.
// 5. Divide total steps by length of the number of days
// 6. Create an instance of the user and input the parameters


function User(name, stepsWalked) {
  this.name = name;
    this.stepsWalked = stepsWalked;
  
  this.totalSteps = function () {
    
        return this.stepsWalked.reduce((total, steps) => total + steps, 0);
    };

  this.averageSteps = function () {
        const total = this.totalSteps();
      return total / this.stepsWalked.length;
    };
}

const user = new User("Lyndy", [30, 52, 75, 88, 96]);
console.log("Total Steps:", user.totalSteps());
console.log("Average Steps:", user.averageSteps());



// 2) Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. 
// Add a method displayRecipe() that logs the name and all ingredients in a readable list, 
// and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.


                        //Inputs
                        // a) Name of the recipe
                        // b) Array of ingredients
                        // c) Cook time in minutes

                        //Pseudocode;
        // 1. Create a function constructor called Recipe, with properties name, ingredients, and cookTime.
        // 2. Add a method displayRecipe() that logs the name and ingredients in a list.
        // 3. Use .forEach() to iterate the array and log each ingredient.
        // 4. Define another method isQuickMeal() to check if cookTime is 30 minutes or less.
        // 5. Create an instance of the recipe and input the parameters


function Recipe(name, ingredients, cookTime) {
    this.name = name;
   this.ingredients = ingredients;
    this.cookTime = cookTime;

    this.displayRecipe = function () {
        console.log(`Recipe: ${this.name}`);
       console.log("Ingredients:");
        this.ingredients.forEach((ingredient) => console.log(`* ${ingredient}`));
    };

    this.isQuickMeal = function () {
        return this.cookTime <= 30;
    };
}


const recipe = new Recipe("Boiled Rice", ["Rice", "Salt", "Boiled Water"], 40);
recipe.displayRecipe();
console.log("Is Quick Meal:", recipe.isQuickMeal());


// 3) Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). 
// Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.

                        //Inputs
                        // a) Model of the car
                        // b) Mileage of the car
                        // c) Array of service history
                        // d) Date of the last service for the car
                        // e) Date of the new service recorded for the car

                        //Pseudocode;
        // 1. Create a function constructor called Car, with properties model, mileage, and serviceHistory.
        // 2. Add method addService(date) to add a new service recorded to the serviceHistory array.
        // 3. Use .push() to add the new date to the array.
        // 4. Define another method lastServiceDate() so it can return the most recent service dated.
        // 5. Create an instance of the car and input the parameters



function Car(model, mileage, serviceHistory) {
    this.model = model;
    this.mileage = mileage;
  this.serviceHistory = serviceHistory;

    this.addService = function (date) {
        this.serviceHistory.push(date);
    };

    this.lastServiceDate = function () {
    return this.serviceHistory[this.serviceHistory.length - 1];
    };
}

const car = new Car("Cardillac Escalade", 15000, ["2025-03-22", "2025-06-20"]);
 car.addService("2023-10-01");
console.log("Last Service Date:", car.lastServiceDate());

// 4) Create a Playlist object with a property songs (an array of song titles). 
// Add methods addSong(title) to add a song, removeSong(title) to delete one, 
// and listSongs() to log all songs currently in the playlist.

                        //Inputs
                        // a) Array of songs
                        // b) Title of the song to be added
                        // c) Title of the song to be removed

                        //Pseudocode;
        // 1. Create a function constructor called Playlist, with a property songs.
        // 2. Add a method addSong(title) to add a song to the songs array.
        // 3. Use .push() to add the new song title to the array.
        // 4. Define another method removeSong(title) to delete a song from the array.
        // 5. Use .indexOf() to find the index of the song and .splice() to remove it.
        // 6. Define another method listSongs() to log all songs currently in the playlist.
        // 7. Use .forEach() to iterate the array and log each song title.
        // 8. Create an instance of the playlist and input the parameters


function Playlist() {
    this.songs = [];

    this.addSong = function (title) {
        this.songs.push(title);
    };

    this.removeSong = function (title) {
        const index = this.songs.indexOf(title);
        if (index > -1) {
            this.songs.splice(index, 1);
        }
    };

    this.listSongs = function () {
        console.log("Playlist:");
        this.songs.forEach((song) => console.log(`This is ${song}`));
    };
}

const playlist = new Playlist();
playlist.addSong("Song 1");
playlist.listSongs();


//Create a Course constructor with title, lessons (an array), and completedLessons (array). 
// Add a method markComplete(lesson) that adds the lesson to completedLessons, 
// and a method getProgress() that returns a string like "3 out of 5 lessons completed".

                        //Inputs
                        // a) The title of the course
                        // b) Array of the lessons in the course
                        // c) Array of completed lessons

                        //Pseudocode;
        // 1. Create a function constructor called Course, with properties title, lessons, and completedLessons.
        // 2. Add a method markComplete(lesson) to add the lesson to completedLessons array.
        // 3. Use push() to add the lesson to the completedLessons array.
        // 4. Define another method getProgress() to return a string with the number of completed lessons.
        // 5. Use length to get the number of completed lessons and total lessons.
        // 6. Create an instance of the course and input the parameters

   function Course(title, lessons, completedLessons) {
        this.title = title;
          this.title = lessons;
            this.completedLessons = completedLessons;
            this.markComplete = function(lesson) {
              this.completedLessons.push(lesson);
            }
            this.getProgress = function() {
              return `${this.completedLessons.length} out of ${this.lessons.length} lessons completed`;
            }
        }

        co
          nst course = new Course ("JavaScript Course", ["Lesson 1", "Lesson 2", "Lesson 3"], []);
        course.markComplete("Lesson 1");
        console.log(course.getProgress());



