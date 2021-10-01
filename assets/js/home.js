$(document).ready(function () {

    $(".card-title a").click(function (event) {
        event.preventDefault();

        var title = $(this).text();
        $("#product-regular").hide();
        $("#product-details").show();
    
        if(title == 'Chaach Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Chaach masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Chaach masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Chaach masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Chaach masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Chaach masala/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
           
        }
        else if(title == 'Chaat Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Chaat Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Chaat Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Chaat Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Chaat Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Chaat Masala/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Chana Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Chana Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Chana Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Chana Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Chana Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Chana Masala/4.png");
            $(".product-content h6").text("Jodhana Chana Masala | Chole Masala | Punjabi Choley Masala | Indian Favorite | Authentic Spice Mix No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar");
            $(".product-content .a").text("Rich in spices.");
            $(".product-content .b").text("To makes food tasty and delicious.");
            $(".product-content .c").text("Ingredients Chilli, Cinnamon, Cinnamon Leaf, Coriander, Clove Leaves, Fennel Seeds, Dry Mango, Salt, Indian Gooseberry, Clove, Black Stone Flower, Cardamom, Star Anise, Oil Cumin, Black Pepper, Turmeric.");
        }
        else if(title == 'Cheese Powder'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Cheese Powder/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Cheese Powder/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Cheese Powder/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Cheese Powder/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Cheese Powder/4.png");
            $(".product-content h6").text("Jodhana Cheddar Cheese Seasoning Powder (Best for Make Delicious Cheese-Flavoured, Pop-Corn, Pizza, Pasta, French Friese etc) -The Taste Of Marwar");
            $(".product-content .a").text("Cheese Powder, Perfect for Pop-corn, Making Cheese Sauce for Nachos, Sprinkling on French Fries.");
            $(".product-content .b").text("All Natural Ingredients for your good health & Made from American Cheddar Cheese; 100% Vegetarian Product. Not suitable for baking.");
            $(".product-content .c").text("Ingredients Dry Cheese.");
        }
        else if(title == 'Dosa Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Dosa Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Dosa Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Dosa Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Dosa Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Dosa Masala/4.png");
            $(".product-content h6").text("Jodhana SouthIndian Dry Dosa Mix Masala Powder | Cold-Pressed & Steam Sterilized | No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar");
            $(".product-content .a").text("Authentic Taste of rural Tamil Nadu in the form of Molaga podi.");
            $(".product-content .b").text("For best results empty contents of idly karam podi into a stainless steel container for storage.");
            $(".product-content .c").text("Ingredients- Chilli, Coriander, Cumin, Dry Mango, Cassia Leaf, Black Pepper, Cloves, Turmeric, Dry Ginger, Star Anise, fennel, Black Cardamom & Salt.");
        }
        else if(title == 'Green Chutney'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Green Chutney/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Green Chutney/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Green Chutney/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Green Chutney/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Green Chutney/4.png");
            $(".product-content h6").text("Cheese Powder, Perfect for Pop-corn, Making Cheese Sauce for Nachos, Sprinkling on French Fries.");
            $(".product-content .a").text("");
            $(".product-content .b").text("100% Natural Product.");
            $(".product-content .c").text("Ingredients Dry Kothmir, Green Chilli, Podhina, Kali Mirch, Jerra, Dry Ginger, Sanchal, Lemon & Salt.");
        }
        else if(title == 'Punjabi Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Punjabi Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Punjabi Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Punjabi Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Punjabi Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Punjabi Masala/4.png");
            $(".product-content h6").text(" Jodhana Punjabi Masala No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar");
            $(".product-content .a").text("Aromatic and rich in flavour ");
            $(".product-content .b").text(" Brings alive the authentic taste and color of traditional cooking");
            $(".product-content .c").text(" ingredients Dhania, Jerra, Dry Mango, Pomegranate, Cassia, Javetri, Shah Jerra, Chilli, Kachari, Cloves, Black Cardamom & Salt.");
        }
        else if(title == 'Idli Sambhar Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Idli Sambhar Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Idli Sambhar Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Idli Sambhar Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Idli Sambhar Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Idli Sambhar Masala/4.png");
            $(".product-content h6").text(" Jodhana Sambar Masala Powder | Blended Spice Mix | for Healthy Delicious & Flavorful Cooking | Easy to Cook | Hygienically Packed | No Preservatives -The Taste Of Marwar");
            $(".product-content .a").text("100% Natural & Pure, No Artificial Flavour, No Addictives, No Preservatives, No MSG ");
            $(".product-content .b").text("ingredientsDhania, Chilli, Fenugreek, Cumin, Cassia, Tej Patta, Salt, Cloves, Urad Dal, Curry Leafs, Turmeric & Compund Hing. ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Pani Puri Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Pani Puri Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Pani Puri Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Pani Puri Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Pani Puri Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Pani Puri Masala/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Rasam Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Rasam Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Rasam Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Rasam Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Rasam Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Rasam Masala/4.png");
            $(".product-content h6").text("Jodhana Rasam Masala | Tamil Iyer Rasam Powder | Homemade Mix Southern Style | Fresh roasted & ground on order with 100% Solar Energy |Pesticide free, natural and non-GMO ingredients -The Taste Of Marwar ");
            $(".product-content .a").text("For the most tangy and tasty South Indian Rasam use Rasam Powder ");
            $(".product-content .b").text(" Rasam Powder contains various spices and condiments which are included in the recipe, and is also known for its simple, yet rich taste");
            $(".product-content .c").text("ingredients Dhania, Chilly, Methi, Jeera, Rai, Cassia, Tej Patta, Salt, Cloves, Urad Dal, Amchur, curry Leaves, Tumeric & Safoetida. ");
        }
        else if(title == 'Samosa Kachori Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Samosa Kachori Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Samosa Kachori Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Samosa Kachori Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Samosa Kachori Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Samosa Kachori Masala/4.png");
            $(".product-content h6").text("Jodhana Samosa Kachori Mix Masala Powder | No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar ");
            $(".product-content .a").text("Authentic Samosa Kachori Masala of India ");
            $(".product-content .b").text("Pure ingredients. ");
            $(".product-content .c").text("ingredients Dalchini, Kashmiri Mirch, kalimirch, Sounf, Cumin, Cloves, Tej Patta, Triphala, Jaiphal, Javantri, Badiyan, Kali Elaichi ");
        }
        else if(title == 'Sandwich Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Sandwich Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Sandwich Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Sandwich Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Sandwich Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Sandwich Masala/4.png");
            $(".product-content h6").text("Jodhana Sandwich Mix Masala No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar ");
            $(".product-content .a").text("100% Natural & Pure, No Artificial Flavour, No Addictives, No Preservatives, No MSG ");
            $(".product-content .b").text("ingredients Black Salt, Rock Salt, Rosted Jerra, Dry Ginger, Dhania, Dry Mango, Kali Mirch & Salt ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Shahi Biryani Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Shahi Biryani Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Shahi Biryani Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Shahi Biryani Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Shahi Biryani Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Shahi Biryani Masala/4.png");
            $(".product-content h6").text("Jodhana Shahi Biryani Masala Powder | No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar ");
            $(".product-content .a").text("Handpicked from freshest spices ");
            $(".product-content .b").text("Add an amazing taste, color and flavour to dish ");
            $(".product-content .c").text("ingredients Kashmiri Chilli, Dhania, Jeera, Turmeric, Cassia, Laung, Badian, Jaiphal, Javintri, Kali Mirch, Triphala, Kali Elachi, Bariyali, Kesar & Salt. ");
        }
        else if(title == 'Tawa Fry Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Tawa Fry Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Tawa Fry Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Tawa Fry Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Tawa Fry Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Tawa Fry Masala/4.png");
            $(".product-content h6").text("Jodhana Tawa Fry Mix Masala Powder | No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar ");
            $(".product-content .a").text(" Low Temperature Grinding so that the spices retains its Freshness and Aroma.");
            $(".product-content .b").text("Lip-smacking taste, super convenient & cooks in minutes ");
            $(".product-content .c").text(" ingredients Chilly, Coriander, Turmeric, Cinnamon Salt, Tej Patta, Cloves, Black Cardamon, cumin, Nagkesar, Triphala, Rai, Hing, Kastoori Methi, Whole Variyali, Dhana Kuriya, Chilly Flaces");
        }
        else if(title == 'Tomato Powder'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Tomato Powder/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Tomato Powder/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Tomato Powder/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Tomato Powder/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Tomato Powder/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Dry sweet Chutney'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Regular/Dry sweet Chutney/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Regular/Dry sweet Chutney/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Regular/Dry sweet Chutney/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Regular/Dry sweet Chutney/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Regular/Dry sweet Chutney/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Chinese Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Garlic Masala/Chinese Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Garlic Masala/Chinese Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Garlic Masala/Chinese Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Garlic Masala/Chinese Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Garlic Masala/Chinese Masala/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Garlic Coconut Chutney'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Garlic Coconut Chutney/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Garlic Coconut Chutney/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Garlic Coconut Chutney/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Garlic Coconut Chutney/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Garlic Coconut Chutney/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Pav bhaji Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Garlic Masala/Pav bhaji Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Garlic Masala/Pav bhaji Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Garlic Masala/Pav bhaji Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Garlic Masala/Pav bhaji Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Garlic Masala/Pav bhaji Masala/4.png");
            $(".product-content h6").text(" Jodhana Pav Bhaji Masala No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar");
            $(".product-content .a").text("This provides the exact balance between the spice-elements and extra ingredients in the dish ");
            $(".product-content .b").text(" NO added colour, NO preservatives, NO Harsh processing, NO MSG.");
            $(".product-content .c").text(" ingredients: Kashmiri Chilly, Dhania, Kali Mirch, Sonf, Cumin, Cloves, Tej Patta, Dry Mango, Turmeric, Garlic, Cassia, Star Anise, Elaichi & Salt.");
        }
        else if(title == 'Peri Peri Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Garlic Masala/Peri Peri Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Garlic Masala/Peri Peri Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Garlic Masala/Peri Peri Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Garlic Masala/Peri Peri Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Garlic Masala/Peri Peri Masala/4.png");
            $(".product-content h6").text("Jodhana Peri Peri Multi-Purpose Masala Seasoning, Instant Seasoning Mix, Original Flavour-The Taste Of Marwar ");
            $(".product-content .a").text(" The Original Piri Piri mix made from the famous African Red Chilli");
            $(".product-content .b").text("Comes in stylish easy to use and moisture resistant packaging ");
            $(".product-content .c").text(" ingredients Origano, Red Chilli Peprika, Kali Mirch, Taj Powder, Mix Hubs, Dry Ginger, Dry Tomato, Garlic, Sugar & Salt");
        }
        else if(title == 'Pizza Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Garlic Masala/Pizza Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Garlic Masala/Pizza Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Garlic Masala/Pizza Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Garlic Masala/Pizza Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Garlic Masala/Pizza Masala/4.png");
            $(".product-content h6").text("Jodhana Pizza Spice Mix Seasoning Pure and Natural Special Tasty & Spices Seasoning for Pizza, Pasta & Pizza Herb Masala SeasoningThe Taste Of Marwar ");
            $(".product-content .a").text("Great on Pizza, Pasta, Noodles, Marconi, chicken, salads and vegetables and Soup. ");
            $(".product-content .b").text(" Authentic taste of perfectly blended Italian style herbs and spices, and customized according to Indian taste.");
            $(".product-content .c").text("ingredients Oregano, Red Chilli Paprica, kali Mirch, Mix Herb, Dry Ginger, Dry Tomato & Sea Salt. ");
        }
        else if(title == 'Schezwan Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Garlic Masala/Schezwan Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Garlic Masala/Schezwan Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Garlic Masala/Schezwan Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Garlic Masala/Schezwan Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Garlic Masala/Schezwan Masala/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Jain Chinese Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Jain Masala/Jain Chinese Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Jain Masala/Jain Chinese Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Jain Masala/Jain Chinese Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Jain Masala/Jain Chinese Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Jain Masala/Jain Chinese Masala/4.png");
            $(".product-content h6").text("Jodhana Jain Chinese Masala Seasoning No Onion No Garlic|| Chinese Masala Jain -The Taste Of Marwar ");
            $(".product-content .a").text("100% Vegetarian Product ");
            $(".product-content .b").text("Store in Cold and Dry Place ");
            $(".product-content .c").text("ingredients Badian, Tej Patta, Laung, Bariyali, kali Mirch, Dry Ginger, Salt, Dry Mango Powder, White Pepper ");
        }
        else if(title == 'Jain Maggi Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Jain Masala/Jain Maggi Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Jain Masala/Jain Maggi Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Jain Masala/Jain Maggi Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Jain Masala/Jain Maggi Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Jain Masala/Jain Maggi Masala/4.png");
            $(".product-content h6").text(" Jodhana Jain Maggi Masala Seasoning No Onion No Garlic|| Jain Jain Maggi Masala -The Taste Of Marwar");
            $(".product-content .a").text("Jain India Magic Masala is the first ever prepared taste enhancer that makes your everyday dishes tastier. It is an exclusive mix of aromatic roasted spices. Adds taste to Noodles, Pizza, Pasta, snacks, Indian Curries, dips and many more items. ");
            $(".product-content .b").text("No Onion No Garlic Seasoning ");
            $(".product-content .c").text("ingredients Dhania, Haldi, Kalimirch, Methi, Rai, Tej Patta, Casia, Lavang, Salt & Sugar. ");
        }
        else if(title == 'Jain Pavbhaji masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Jain Masala/Jain Pavbhaji masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Jain Masala/Jain Pavbhaji masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Jain Masala/Jain Pavbhaji masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Jain Masala/Jain Pavbhaji masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Jain Masala/Jain Pavbhaji masala/4.png");
            $(".product-content h6").text(" Jodhana Jain Pav Bhaji Masala Seasoning No Onion No Garlic|| Jain Pav Bhaji Masala -The Taste Of Marwar");
            $(".product-content .a").text("This provides the exact balance between the spice-elements and extra ingredients in the dish ");
            $(".product-content .b").text("NO added colour, NO preservatives, NO Harsh processing, NO MSG. ");
            $(".product-content .c").text("ingredients: Kashmiri Chilly, Dhania, Kali Mirch, Sonf, Cumin, Cloves, Tej Patta, Dry Mango, Turmeric, Garlic, Cassia, Star Anise, Elaichi & Salt. ");
        }
        else if(title == 'Jain Peri Peri Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Jain Masala/Jain Peri Peri Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Jain Masala/Jain Peri Peri Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Jain Masala/Jain Peri Peri Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Jain Masala/Jain Peri Peri Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Jain Masala/Jain Peri Peri Masala/4.png");
            $(".product-content h6").text("Jodhana Jain Peri Peri Masala Seasoning No Onion No Garlic|| Jain Piri piri Masala -The Taste Of Marwar ");
            $(".product-content .a").text("The Original Piri Piri mix made from the famous African Red Chilli ");
            $(".product-content .b").text(" Comes in stylish easy to use and moisture resistant packaging");
            $(".product-content .c").text("ingredientsOrigano, Red Chilli Peprika, Kali Mirch, Taj Powder, Mix Hubs, Dry Ginger, Dry Tomato, Sugar & Salt ");
        }
        else if(title == 'Jain Schezwan Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Jain Masala/Jain Schezwan Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Jain Masala/Jain Schezwan Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Jain Masala/Jain Schezwan Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Jain Masala/Jain Schezwan Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Jain Masala/Jain Schezwan Masala/4.png");
            $(".product-content h6").text("Jodhana Jain Schezwan Masala (Jain) Seasoning No Onion No Garlic|| Schezwan Masala Jain -The Taste Of Marwar ");
            $(".product-content .a").text("Authentic rice masalas ");
            $(".product-content .b").text("Distinctive flavour and fine mixture ");
            $(".product-content .c").text("ingredients Red Chilli, Peprika, Dry Mango, Dry Ginger, Kali Mirch, Dry Tomato, Garlic, Condiments, white Pepper & Seasonings ");
        }
        else if(title == 'Jain Vada Pav Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Jain Masala/Jain Vada Pav Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Jain Masala/Jain Vada Pav Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Jain Masala/Jain Vada Pav Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Jain Masala/Jain Vada Pav Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Jain Masala/Jain Vada Pav Masala/4.png");
            $(".product-content h6").text("Jodhana Vada Pav Masala (Jain) Powder | No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar ");
            $(".product-content .a").text("Vada Pav is a delicious snack found everywhere in Mumbai ");
            $(".product-content .b").text("Spice up your Mood with variety Pickle ");
            $(".product-content .c").text("ingredients: Palitna Chilli, Jerra, Spices Condiments, Dhania, Dry Mango, Adible Veg Oil & Salt ");
        }
        else if(title == 'Dalchini Powder'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Powder/Dalchini Powder/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Powder/Dalchini Powder/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Powder/Dalchini Powder/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Powder/Dalchini Powder/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Powder/Dalchini Powder/4.png");
            $(".product-content h6").text("Jodhana Cinnamon ( Dalchini / Dalcheeni ) Powder, | Anti-Inflammatory, Keto Friendly, Weight Loss No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar ");
            $(".product-content .a").text("Cinnamon is actually made from a type of tree, and the unique smell, colour and flavour of cinnamon is a result of the oily part of the tree that it grows from ");
            $(".product-content .b").text("Cinnamon also supplies a wide variety of important nutrients and is especially rich in fibre and manganese along with several other vitamins and minerals ");
            $(".product-content .c").text("ingredients Powdered Cinnamon ");
        }
        else if(title == 'Elaichi Powder'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Powder/Elaichi Powder/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Powder/Elaichi Powder/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Powder/Elaichi Powder/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Powder/Elaichi Powder/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Powder/Elaichi Powder/4.png");
            $(".product-content h6").text("Jodhana Hari Elaichi Powder // Green Cardamom Powder // Choti Elaichi Powder//No additives or Harmful Chemicals //Pure & Natural -The Taste Of Marwar ");
            $(".product-content .a").text("Cineole the major active component of cardamom, it is a potent antiseptic that kills the bacteria in bad breath, and is also known to have expectorant activity for clearing breathing passages. ");
            $(".product-content .b").text("Our Green Cardamom is direct from farm, with no middleman providing total benefit direct to farmers. ");
            $(".product-content .c").text(" ingredients Powdered Cardamom");
        }
        else if(title == 'Garam Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Powder/Garam Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Powder/Garam Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Powder/Garam Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Powder/Garam Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Powder/Garam Masala/4.png");
            $(".product-content h6").text("Jodhana Spices Garam Masala | 100% Pure Spices | Stronger than Ordinary Masala-The Taste Of Marwar ");
            $(".product-content .a").text("Fights disease and builds immunity ");
            $(".product-content .b").text("Being used in most Indian delicacies, garam masala is integral to Indian food ");
            $(".product-content .c").text("ingredients Powdered Garam Masala ");
        }
        else if(title == 'Immunity Booster'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Powder/Immunity Booster/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Powder/Immunity Booster/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Powder/Immunity Booster/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Powder/Immunity Booster/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Powder/Immunity Booster/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Kali Mirch Powder'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Powder/Kali Mirch Powder/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Powder/Kali Mirch Powder/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Powder/Kali Mirch Powder/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Powder/Kali Mirch Powder/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Powder/Kali Mirch Powder/4.png");
            $(".product-content h6").text("Jodhana Black Pepper Powder 100% Chemical Free Kali Mirch Powder-The Taste Of Marwar ");
            $(".product-content .a").text("Expertly balanced with Premium ingedients ");
            $(".product-content .b").text("Authentic taste and exquisite flavour ");
            $(".product-content .c").text("ingredients Powdered black pepper ");
        }
        else if(title == 'Laung Powder'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Powder/Laung Powder/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Powder/Laung Powder/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Powder/Laung Powder/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Powder/Laung Powder/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Powder/Laung Powder/4.png");
            $(".product-content h6").text(" Jodhana Clove Powder No additives or Harmful Chemicals | Pure & Natural -The Taste Of Marwar");
            $(".product-content .a").text("No additives, preservatives or colors added ");
            $(".product-content .b").text(" Perfect for adding to spice blends, marinades, spice rubs, teas, pickles etc.");
            $(".product-content .c").text("ingredients Powdered Clove ");
        }
        else if(title == 'Sonth Powder'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Powder/Sonth Powder/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Powder/Sonth Powder/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Powder/Sonth Powder/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Powder/Sonth Powder/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Powder/Sonth Powder/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
        else if(title == 'Tea Masala'){
            $(".product-title a").text(title);
            $("#myimage").attr("src", "assets/img/Masala/Powder/Tea Masala/1.png");
            $(".product-a").attr("src", "assets/img/Masala/Powder/Tea Masala/1.png");
            $(".product-b").attr("src", "assets/img/Masala/Powder/Tea Masala/2.png");
            $(".product-c").attr("src", "assets/img/Masala/Powder/Tea Masala/3.png");
            $(".product-d").attr("src", "assets/img/Masala/Powder/Tea Masala/4.png");
            $(".product-content h6").text(" ");
            $(".product-content .a").text(" ");
            $(".product-content .b").text(" ");
            $(".product-content .c").text(" ");
        }
    });

    $("img").click(function () {
        // Change src attribute of image

        var imgsrc = $(this).attr("src");
        if (imgsrc == $("#myimage").attr("src")) {
            console.log(imgsrc);
        } else {
            $("#myimage").attr("src", imgsrc);
            // $(this).css('box-shadow', '10px 10px 5px #000')
        }
    });
});