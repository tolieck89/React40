 async function geteopleAPI(params) {
    const peopleArraresult = await fetch (params);
    return peopleArraresult.json();
 }

    export default async function createPeopleArray(params) {
      const peopleArray = await geteopleAPI(params);
      return peopleArray;
}