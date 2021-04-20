const DEPARTMENTS_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/departments'
var result;

function fetchDepartmentsData() {
  return fetch(DEPARTMENTS_URL)
    .then((response) => {
      return response.json()
    })
    .catch(function(err) {
      console.log(err.message);
    });
}


async function fetchDepData() {
  const jsonResponse = await fetchDepartmentsData();

  var departments = jsonResponse.departments.map(department => department['displayName']);
  addDropdownValues(departments);

  let res = getSelection();
  console.log(res);
};
fetchDepData();
