type Props = {
  store?: Record<string, unknown>;
};

export function StoreCard({}: Props) {
  return (
    <div class="bg-white ml-6 mt-6 shadow-md w-full sm:w-[45%] lg:w-[30%]">
      {/* need to add before classes */}
      <div class="relative px-6 text-right">
        <div class="relative z-10 border-b-1 border-solid border-gray-50 mb-10 py-4 flex text-white items-center justify-around">
          Comm
        </div>
        <img
          src="https://media.istockphoto.com/id/1083487948/photo/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-concrete-background-top.jpg?s=612x612&w=0&k=20&c=E5rcp7F5y3SII4AYFmxFfcnkh6_LtVO4dzvjJDkXook="
          alt="pizza"
          class="h-full w-full top-0 right-0 absolute left-0 object-cover"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)" }}
        />
        <h3 class="break-words relative m-0 text-4xl z-10 -skew-3 leading-5">
          {/* add before classes */}
          <a href="#storeId" class="border-none bg-storeCardTitle">
            title
          </a>
        </h3>
      </div>
      {/* DETAILS BELOW */}
      <div class="p-6">
        <p>Details</p>
      </div>
    </div>
  );
}
