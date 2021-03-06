(function () {
    window['_array'] = function (array) {
        /// <signature>
        ///     <summary>Return array from parameters</summary>
        ///     <param name="array" type="ARRAY">Array</param>
        ///     <returns type='array'/>
        /// </signature>
        return {
            findBy      : function (path, value, multiple) {
                /// <signature>
                ///     <summary>Search defined value in items of array (if items are objects)</summary>
                ///     <param name="path"      type="any"      >Path to property</param>
                ///     <param name="value"     type="any"      >Compared value</param>
                ///     <returns type="any">Match(s)</returns>
                /// </signature>
                /// <signature>
                ///     <summary>Search defined value in items of array (if items are objects)</summary>
                ///     <param name="path"      type="any"      >Path to property</param>
                ///     <param name="value"     type="any"      >Compared value</param>
                ///     <param name="multiple"  type="boolean"  >True - return all matches; False - return only first</param>
                ///     <returns type="any">Match(s)</returns>
                /// </signature>
            },
        };
    };
})();