from dataclasses import dataclass
import mysql.connector
import ijson

# Connect to MySQL database
db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "root",
    database = "nutritiondb",
    autocommit = True
)

cursor = db.cursor()

# Clean table and recreate it upon executing the script
cursor.execute("DROP TABLE IF EXISTS Foods;")
cursor.execute("CREATE TABLE Foods (Name varchar(255), Calories int, Sugar int, Fat int, SaturatedFat int, TransFat int, Protein int, Sodium int, Cholesterol int, Carbohydrates int, Fiber int, Calcium int, Iron int);")

# Query to be executed for each item
sql = "INSERT INTO Foods (Name, Calories, Sugar, Fat, SaturatedFat, TransFat, Protein, Sodium, Cholesterol, Carbohydrates, Fiber, Calcium, Iron) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"

# Empty variables that each item will modify in order to insert them into the table
name = ""
cals = 0
sugar = 0
fat = 0
saturatedFat = 0
transFat = 0
protein = 0
sodium = 0
cholesterol = 0
carbohydrates = 0
fiber = 0
calcium = 0
iron = 0

# Stream the json file, insert each item into the table with its name and nutrition values
for prefix, event, value in ijson.parse(open("FoodData_Central_branded_food_json_2021-10-28.json", "r", errors="ignore")):
    if (prefix == "BrandedFoods.item.description"):
        name = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.calories.value"):
        cals = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.sugar.value"):
        sugar = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.fat.value"):
        fat = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.saturatedFat.value"):
        saturatedFat = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.transFat.value"):
        transFat = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.protein.value"):
        protein = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.sodium.value"):
        sodium = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.cholesterol.value"):
        cholesterol = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.carbohydrates.value"):
        carbohydrates = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.fiber.value"):
        fiber = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.calcium.value"):
        calcium = value
        continue
    if (prefix == "BrandedFoods.item.labelNutrients.iron.value"):
        iron = value
        continue
    if (prefix == "BrandedFoods.item.publicationDate"):
        try:
            insert = [(name, cals, sugar, fat, saturatedFat, transFat, protein, sodium, cholesterol, carbohydrates, fiber, calcium, iron)]
            cursor.executemany(sql, insert)
        except:
            continue
        continue