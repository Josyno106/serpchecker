export const load = async ({ fetch }) => {
  let API_KEY = import.meta.env.VITE_API_KEY;
  const res = await fetch(
    "https://api.scrape-it.cloud/scrape/google?q=Coffee&filter=1&domain=google.com&gl=us&hl=en&deviceType=desktop",
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );
  const results = await res.json();
  const organicResultsData = results.organicResults;

  return {
    name: "Joshua",
    results,
    organicResultsData,
  };
};

// export async function load(loadEvent) {
//   const { fetch } = loadEvent;
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const posts = await res.json();

//   //check if the response was successful
//   if (res.ok) {
//     return {
//       props: {
//         posts,
//       },
//     };
//   }

//   return {
//     status: res.status,
//     error: new Error("An Error Occurred"),
//   };
// }
