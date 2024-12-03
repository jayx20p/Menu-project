function MenuItem({ name, price, nutritionInfo }) {
  return (
    <>
      <p>
        <strong>{name}</strong> | {price}
        <NutritionalInfo nutritionInfo={nutritionInfo} />
      </p>
    </>
  );
}

function Category({ title, foods }) {
  return (
    <div>
      <h2> {title} </h2>
      {foods}
    </div>
  );
}

const friedChicken = (
  <>
    <MenuItem name={"2pc Fried Chicken set"} price={"RM 10"} nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }} />
    <MenuItem name={"6 piece nuggets"} price={"RM 6"} nutritionInfo={{ calories: 270, protein: 13, carbs: 16, fat: 16 }} />
  </>
);

const desserts = (
  <>
    <MenuItem name={"Ice Cream"} price={"RM 5"} nutritionalInfo={{ calories: 207, protein: 2, carbs: 33, fat: 6 }} />
    <MenuItem name={"Chocolate cake"} price={"RM 5"} nutritionalInfo={{ calories: 270, protein: 1, carbs: 43, fat: 10 }} />
  </>
)

function NutritionalInfo({ nutritionInfo }) {
  return (
    <div>
      <p>Calories: {nutritionInfo?.calories} kcal</p>
      <p>Protein: {nutritionInfo?.protein} g</p>
      <p>Carbs: {nutritionInfo?.carbs} g</p>
      <p>Fat: {nutritionInfo?.fat} g</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Uncle Haris Fried Chicken</h1>
      <Category title={"Fried Chicken"} foods={friedChicken} />
      <Category title={"Desserts"} foods={desserts}></Category>
    </>
  );
}
export default App;