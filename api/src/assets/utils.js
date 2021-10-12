const filterArray = ( arra, query ) => {
    return arra.filter( ( entry ) => {
        console.log(entry.name.toLowerCase().indexOf( query.toLowerCase() ) !== -1);
        return entry.name.toLowerCase().indexOf( query.toLowerCase() ) !== -1;
    });
};

module.exports = {
    filterArray
}