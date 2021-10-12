/**
 * filters an array with a given query to find all Object with the belonging key (includes prefixes)
 * @param { Array } array  
 * @param { String } query 
 * @returns Array
 */
const filterArray = ( array, query ) => {
    return array.filter( ( entry ) => {
        console.log(entry.name.toLowerCase().indexOf( query.toLowerCase() ) !== -1);
        return entry.name.toLowerCase().indexOf( query.toLowerCase() ) !== -1;
    });
};

module.exports = {
    filterArray
}