import ItemsList from "./ItemsList";

const RestaurantCategories = ({ data }) => {
  

  return (
    <div>
      

      <div>
        <div  className="w-full bg-gray-50 shadow-lg my-4 flex justify-between p-4">
        <span className="font-bold text-lg">{data?.title} ({data?.itemCards.length})</span>
        <span>⬇️</span>
        </div>

        <div>
          <ItemsList items={data.itemCards} />
        </div>
      </div>

      
    </div>
  );
};

export default RestaurantCategories;
