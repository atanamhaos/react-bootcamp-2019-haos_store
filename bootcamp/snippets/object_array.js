let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for(var x=0; x<students.length; x++){
    // console.log(x);
    // console.log(students[x]);
    // console.log(students[x]['name']);
    // console.log(students[x]['cohort']);
    console.log(`Name: ${students[x]['name']}, Cohort: ${students[x]['cohort']}`)
}