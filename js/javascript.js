const recipes = [
    {
        name: "Mediterranean Quinoa Bowl",
        desc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        image: "images/photo-1546069901-ba9599a7e63c.avif",
        rating: "4.5", reviews: "(156 reviews)",
        prepTime: "20 min", cookTime: "35 min", serves: "2 people",
        difficulty: "Easy", category: "Mediterranean",
        isLongPrep: true,
        ingredients: ["1 cup quinoa", "7 cherry tomatoes, halved", "Cucumber, diced", "Red onion, sliced", "Kalamata olives", "Feta cheese, crumbled", "Fresh parsley", "Tahini dressing"],
        instructions: ["Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.", "While quinoa cooks, prepare all vegetables and set aside.", "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.", "Fluff cooked quinoa with a fork and let cool slightly." , "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives." , "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."],
        nutrition: [
            { name: "Calories", value: "480 kcal", icon: "fa-fire", color: "orange" },
            { name: "Protein", value: "18g", icon: "fa-dumbbell", color: "blue" },
            { name: "Carbohydrates", value: "58g", icon: "fa-wheat-awn", color: "yellow" },
            { name: "Fat", value: "20g", icon: "fa-droplet", color: "red" },
            { name: "Fiber", value: "10g", icon: "fa-seedling", color: "green" },
            { name: "Sodium", value: "540mg", icon: "fa-cube", color: "pink" }
        ],
        tips: ["Rinse quinoa well to remove bitter coating", "Let quinoa cool before adding fresh ingredients." , "Make extra tahini dressing - it keeps well in the fridge" , "Add grilled chicken or chickpeas for extra protein"]
    },
    {
        name: "Creamy Spaghetti Carbonara",
        desc: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        image: "images/photo-1612874742237-6526221588e3.avif",
        rating: "4.8", reviews: "(234 reviews)",
        prepTime: "15 min", cookTime: "20 min", serves: "4 people",
        difficulty: "Easy", category: "Italian",
        isLongPrep: false,
        ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs", "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper", "Salt for pasta water"],
        instructions: ["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.", "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.", "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.", "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta", "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce."],
        nutrition: [
            { name: "Calories", value: "520 kcal", icon: "fa-fire", color: "orange" },
            { name: "Protein", value: "28g", icon: "fa-dumbbell", color: "blue" },
            { name: "Carbohydrates", value: "62g", icon: "fa-wheat-awn", color: "yellow" },
            { name: "Fat", value: "18g", icon: "fa-droplet", color: "red" },
            { name: "Fiber", value: "3g", icon: "fa-seedling", color: "green" },
            { name: "Sodium", value: "680mg", icon: "fa-cube", color: "pink" }
        ],
        tips: ["Use room temperature eggs for a smoother sauce consistency.", "Work quickly when mixing eggs with hot pasta to avoid scrambling","Reserve extra pasta water - it's the secret to perfect creaminess","Freshly grated cheese makes all the difference in flavor","Never add cream - authentic carbonara is made with eggs only"]
    },
    {
        name: "Margherita Pizza",
        desc: "Classic Italian fresh pizza with fresh mozzarella and basil",
        image: "images/photo-1574071318508-1cdbab80d002.avif",
        rating: "4.9", reviews: "(512 reviews)",
        prepTime: "90 min", cookTime: "12 min", serves: "2 people",
        difficulty: "Intermediate", category: "Italian",
        isLongPrep: true,
        ingredients: ["300g pizza dough", "200g crushed tomatoes", "250g fresh mozzarella", "4 fresh basil leaves", "2 tablespoons olive oil", "2 cloves garlic, minced", "Salt and pepper to taste","Parmesan cheese for topping"],
        instructions: ["Let pizza dough come to room temperature and rest for 1 hour.", "Preheat oven to maximum temperature (usually 250°C/480°F).", "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.", "Roll out dough on a floured surface to desired thickness.", "Spread tomato sauce, tear mozzarella pieces, and drizzle with olive oil.","Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."],
        nutrition: [
            { name: "Calories", value: "650 kcal", icon: "fa-fire", color: "orange" },
            { name: "Protein", value: "32g", icon: "fa-dumbbell", color: "blue" },
            { name: "Carbohydrates", value: "70g", icon: "fa-wheat-awn", color: "yellow" },
            { name: "Fat", value: "22g", icon: "fa-droplet", color: "red" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", color: "green" },
            { name: "Sodium", value: "920mg", icon: "fa-cube", color: "pink" }
        ],
        tips: ["Use a pizza stone for crispier crust", "Don't overload with toppings - less is more","Add basil after baking to keep it fresh","Let dough rest properly for best texture"]
    },
    {
        name: "French Onion Soup",
        desc: "Rich beef broth with caramelized onions and melted cheese",
        image: "images/photo-1547592166-23ac45744acd.avif",
        rating: "4.7", reviews: "(267 reviews)",
        prepTime: "15 min", cookTime: "60 min", serves: "4 people",
        difficulty: "Intermediate", category: "Mediterranean",
        isLongPrep: true,
        ingredients: ["4 large onions, thinly sliced", "4 tablespoons butter", "1 liter beef broth", "1/2 cup white wine", "2 bay leaves", "Fresh thyme", "Baguette slices", "200g Gruyère cheese, grated"],
        instructions: ["Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.", "Add white wine and deglaze the pot, scraping up brown bits.", "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.", "Meanwhile, toast baguette slices until golden.","Ladle soup into oven-safe bowls. Top with toasted bread and cheese.","Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."],
        nutrition: [
            { name: "Calories", value: "380 kcal", icon: "fa-fire", color: "orange" },
            { name: "Protein", value: "18g", icon: "fa-dumbbell", color: "blue" },
            { name: "Carbohydrates", value: "36g", icon: "fa-wheat-awn", color: "yellow" },
            { name: "Fat", value: "18g", icon: "fa-droplet", color: "red" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", color: "green" },
            { name: "Sodium", value: "980mg", icon: "fa-cube", color: "pink" }
        ],
        tips: ["Patience is key - don't rush the onion caramelization", "Use good quality beef broth for best flavor", "Watch carefully when broiling to avoid burning","Gruyère can be substituted with Swiss cheese"]
    },
    {
        name: "Pad Thai",
        desc: "Popular Thai stir-fried noodles with shrimp and peanuts",
        image: "images/photo-1559314809-0d155014e29e.avif",
        rating: "4.8", reviews: "(445 reviews)",
        prepTime: "20 min", cookTime: "15 min", serves: "2 people",
        difficulty: "Intermediate",
        category: "Asian",
        isLongPrep: false,
        ingredients: ["200g rice noodles", "200g shrimp, peeled", "2 eggs", "3 tablespoons tamarind paste", "2 tablespoons fish sauce", "1 tablespoon palm sugar", "Bean sprouts","Crushed peanuts","Lime wedges and cilantro"],
        instructions: ["Soak rice noodles in warm water for 30 minutes. Drain and set aside.", "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.", "Heat wok over high heat. Scramble eggs and set aside.", "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.","Add scrambled eggs and bean sprouts. Toss everything together.","Serve topped with crushed peanuts, lime wedges, and cilantro."],
        nutrition: [
            { name: "Calories", value: "540 kcal", icon: "fa-fire", color: "orange" },
            { name: "Protein", value: "32g", icon: "fa-dumbbell", color: "blue" },
            { name: "Carbohydrates", value: "62g", icon: "fa-wheat-awn", color: "yellow" },
            { name: "Fat", value: "16g", icon: "fa-droplet", color: "red" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", color: "green" },
            { name: "Sodium", value: "1120mg", icon: "fa-cube", color: "pink" }
        ],
        tips: ["Don't oversoak noodles or they'll be mushy", "Cook on high heat for authentic wok flavor","Balance sweet, sour, and salty flavors", "Prepare all ingredients before starting to cook"]
    },
    {
        name: "Vegetable Curry",
        desc: "Hearty vegetarian curry with coconut milk",
        image: "images/photo-1585032226651-759b368d7246.avif",
        rating: "4.6", reviews: "(289 reviews)",
        prepTime: "20 min", cookTime: "30 min", serves: "4 people",
        difficulty: "Easy", category: "Asian",
        isLongPrep: true,
        ingredients: ["2 potatoes, cubed", "2 cauliflower, florets", "2 carrots, sliced", "1 can chickpeas", "1 cup plain yogurt", "400ml coconut milk", "1 onion, diced", "3 cloves garlic, minced","Fresh spinach"],
        instructions: ["Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.", "Pour in coconut milk and 1 cup water. Bring to simmer.", "Add potatoes and carrots, cook for 5 minutes.", "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.", "Stir in fresh spinach and cook until wilted.","Serve hot over basmati rice or with naan bread."],
        nutrition: [
            { name: "Calories", value: "380 kcal", icon: "fa-fire", color: "orange" },
            { name: "Protein", value: "14g", icon: "fa-dumbbell", color: "blue" },
            { name: "Carbohydrates", value: "48g", icon: "fa-wheat-awn", color: "yellow" },
            { name: "Fat", value: "16g", icon: "fa-droplet", color: "red" },
            { name: "Fiber", value: "12g", icon: "fa-seedling", color: "green" },
            { name: "Sodium", value: "480mg", icon: "fa-cube", color: "pink" }
        ],
        tips: ["Add vegetables in order of cooking time needed", "Adjust curry powder amount to taste","Use full-fat coconut milk for creamier curry","Add protein like tofu or paneer if desired"]
    },
    {
        name: "Caprese Sandwich",
        desc: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        image: "images/photo-1509722747041-616f39b57569.avif",
        rating: "4.5", reviews: "(189 reviews)",
        prepTime: "10 min", cookTime: "5 min", serves: "2 people",
        difficulty: "Easy", category: "Italian",
        isLongPrep: false,
        ingredients: ["1 ciabatta bread", "200g fresh mozzarella, sliced", "2 large tomatoes, sliced", "Fresh basil leaves", "2 tablespoons balsamic glaze", "Salt and pepper","Olive oil"],
        instructions: ["Slice ciabatta bread in half horizontally.", "Toast bread lightly until just crispy.", "Spread pesto on both sides of bread.", "Layer mozzarella slices, tomato slices, and fresh basil leaves.", "Drizzle with olive oil and balsamic glaze. Season with salt and pepper."],
        nutrition: [
            { name: "Calories", value: "480 kcal", icon: "fa-fire", color: "orange" },
            { name: "Protein", value: "22g", icon: "fa-dumbbell", color: "blue" },
            { name: "Carbohydrates", value: "48g", icon: "fa-wheat-awn", color: "yellow" },
            { name: "Fat", value: "20g", icon: "fa-droplet", color: "red" },
            { name: "Fiber", value: "3g", icon: "fa-seedling", color: "green" },
            { name: "Sodium", value: "680mg", icon: "fa-cube", color: "pink" }
        ],
        tips: ["Use ripe, in-season tomatoes for best flavor", "Buffalo mozzarella is traditional but harder to slice","Toast bread lightly - not too crispy","Add prosciutto or salami for a heartier sandwich"]
    },
    {
        name: "Teriyaki Chicken Bowl",
        desc: "Sweet and savory chicken over rice with vegetables",
        image: "images/photo-1546069901-eacef0df6022.avif",
        rating: "4.7", reviews: "(367 reviews)",
        prepTime: "15 min", cookTime: "20 min", serves: "2 people",
        difficulty: "Easy", category: "Asian",
        isLongPrep: false,
        ingredients: ["400g chicken thighs, sliced", "1/2 cup teriyaki sauce", "2 cups cooked rice", "1 broccoli head, florets", "1 carrot, julienned", "Sesame seeds", "Green onions, sliced","1 tablespoon sesame oil"],
        instructions: ["Heat sesame oil in a pan. Cook chicken until browned on all sides.", "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.", "Meanwhile, steam broccoli and carrots until tender-crisp.", "Divide rice between bowls.","Top with teriyaki chicken and steamed vegetables.","Garnish with sesame seeds and green onions. Serve hot."],
        nutrition: [
            { name: "Calories", value: "540 kcal", icon: "fa-fire", color: "orange" },
            { name: "Protein", value: "42g", icon: "fa-dumbbell", color: "blue" },
            { name: "Carbohydrates", value: "58g", icon: "fa-wheat-awn", color: "yellow" },
            { name: "Fat", value: "14g", icon: "fa-droplet", color: "red" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", color: "green" },
            { name: "Sodium", value: "1240mg", icon: "fa-cube", color: "pink" }
        ],
        tips: ["Use chicken thighs for juicier meat", "Make homemade teriyaki sauce for better flavor control","Add edamame for extra protein","Meal prep by cooking rice and chicken ahead"]
    }
];

function displayRecipe(recipe) {
    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('recipe-name').textContent = recipe.name;
    document.getElementById('recipe-description').textContent = recipe.desc;
    document.getElementById('rating-average').textContent = recipe.rating;
    document.getElementById('rating-quantity').textContent = recipe.reviews;
    document.getElementById('prep-time-display').textContent = recipe.prepTime;
    document.getElementById('cook-time-display').textContent = recipe.cookTime;
    document.getElementById('servings-display').textContent = recipe.serves;
    document.getElementById('difficulty-badge').textContent = recipe.difficulty;
    document.getElementById('category-badge').textContent = recipe.category;

    var timeWarning = document.getElementById('time-warning');
    if (recipe.isLongPrep) {
        timeWarning.classList.remove('d-none');
    } else {
        timeWarning.classList.add('d-none');
    }

    var ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = ''; 

    for (var i = 0; i < recipe.ingredients.length; i++) {
        var ing = recipe.ingredients[i];

        var listItem = document.createElement('li');
        listItem.className = 'd-flex align-items-start';
        var numberCircle = document.createElement('div');
        numberCircle.className = 'number-circle me-3';
        numberCircle.textContent = i + 1;
        var ingredientText = document.createElement('span');
        ingredientText.className = 'text-secondary';
        ingredientText.textContent = ing;
        listItem.appendChild(numberCircle);
        listItem.appendChild(ingredientText);
        ingredientsList.appendChild(listItem);
    }
    var instructionsList = document.getElementById('instructions-list');
    instructionsList.innerHTML = ''; 

    for (var i = 0; i < recipe.instructions.length; i++) {
        var step = recipe.instructions[i];
        var stepContainer = document.createElement('div');
        stepContainer.className = 'd-flex align-items-start';
        var stepBox = document.createElement('div');
        stepBox.className = 'step-box me-4 shadow-sm';
        stepBox.textContent = i + 1;
        var textWrapper = document.createElement('div');
        textWrapper.className = 'flex-grow-1 pt-2';
        var stepText = document.createElement('p');
        stepText.className = 'text-secondary mb-0';
        stepText.textContent = step;
        textWrapper.appendChild(stepText);
        stepContainer.appendChild(stepBox);
        stepContainer.appendChild(textWrapper);
        instructionsList.appendChild(stepContainer);
    }
    var nutritionData = document.getElementById('nutrition-data');
    nutritionData.innerHTML = ''; 

    for (var i = 0; i < recipe.nutrition.length; i++) {
        var nut = recipe.nutrition[i];
        var iconColorClass = 'text-' + nut.color;
        var bgColorClass = 'bg-' + nut.color + '-subtle';
        var col = document.createElement('div');
        col.className = 'col-md-6';
        var dataBox = document.createElement('div');
        dataBox.className = 'd-flex align-items-center justify-content-between p-3 bg-nutrition-light rounded-3';
        var nameIconWrapper = document.createElement('div');
        nameIconWrapper.className = 'd-flex align-items-center';
        var iconBox = document.createElement('div');
        iconBox.className = 'w-10 h-10 ' + bgColorClass + ' rounded-lg d-flex align-items-center justify-content-center me-3';
        var icon = document.createElement('i');
        icon.className = 'fa-solid ' + nut.icon + ' ' + iconColorClass;
        var nameSpan = document.createElement('span');
        nameSpan.className = 'text-secondary font-semibold';
        nameSpan.textContent = nut.name;
        var valueSpan = document.createElement('span');
        valueSpan.className = 'fw-bold text-dark';
        valueSpan.textContent = nut.value;
        iconBox.appendChild(icon);
        nameIconWrapper.appendChild(iconBox);
        nameIconWrapper.appendChild(nameSpan);
        dataBox.appendChild(nameIconWrapper);
        dataBox.appendChild(valueSpan);
        col.appendChild(dataBox);
        nutritionData.appendChild(col);
    }
    var tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = ''; 

    for (var i = 0; i < recipe.tips.length; i++) {
        var tip = recipe.tips[i];

        var tipContainer = document.createElement('div');
        tipContainer.className = 'd-flex align-items-start p-4 bg-tip-light rounded-xl border-start border-4 border-tip-base';
        var checkIcon = document.createElement('i');
        checkIcon.className = 'fa-solid fa-check-circle text-tip-color fs-5 me-3 mt-1';
        var tipText = document.createElement('p');
        tipText.className = 'text-secondary mb-0';
        tipText.textContent = tip;
        tipContainer.appendChild(checkIcon);
        tipContainer.appendChild(tipText);
        tipsList.appendChild(tipContainer);
    }
}
function generateRandomRecipe() {
    var lastIndex = window.currentRecipeIndex;
    if (lastIndex === undefined) {
        lastIndex = -1;
    }

    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * recipes.length);
    } while (randomIndex === lastIndex && recipes.length > 1);

    window.currentRecipeIndex = randomIndex;
    displayRecipe(recipes[randomIndex]);
}
function setupTabs() {
    var tabButtons = document.querySelectorAll('.tab-button');
    var tabContents = document.querySelectorAll('.tab-content');
    for (var i = 0; i < tabButtons.length; i++) {
        var button = tabButtons[i];
        button.addEventListener('click', function (event) {
            for (var j = 0; j < tabButtons.length; j++) {
                tabButtons[j].classList.remove('active');
            }
            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].classList.add('d-none');
            }
            event.currentTarget.classList.add('active');
            var targetId = event.currentTarget.getAttribute('data-tab') + '-tab';
            document.getElementById(targetId).classList.remove('d-none');
        });
    }
}
function init() {
    generateRandomRecipe();
    document.getElementById('try-another-btn').onclick = generateRandomRecipe;
    setupTabs();
}

window.onload = init;