(function () {
    window['_object'] = function (object) {
        /// <signature>
        ///     <summary>Return object from parameters</summary>
        ///     <param name="object" type="OBJECT">Object</param>
        ///     <returns type='object'/>
        /// </signature>
        return {
            forEach     : function (callback){
                /// <signature>
                ///     <summary>Goes within each element of object (does not include nested)</summary>
                ///     <param name="callback" type="FUNCTION">Callback(key, value)</param>
                ///     <returns type="void"/>
                /// </signature>
            },
            extend      : function (target, exclusion) {
                /// <signature>
                ///     <summary>Inherit all properties (and methods) of object and create new object</summary>
                ///     <returns type="OBJECT"/>
                /// </signature>
                /// <signature>
                ///     <summary>Inherit all properties (and methods) of object</summary>
                ///     <param name="target" type="OBJECT">Target object, link to new object</param>
                ///     <returns type="OBJECT"/>
                /// </signature>
                /// <signature>
                ///     <summary>Inherit all properties (and methods) of object</summary>
                ///     <param name="target" type="OBJECT">Target object, link to new object</param>
                ///     <param name="exclusion" type="ARRAY">Array of names of properties (or methods), which should not be inherited</param>
                ///     <returns type="OBJECT"/>
                /// </signature>
            },
            copy        : function (target) {
                /// <signature>
                ///     <summary>Return copy of object</summary>
                ///     <returns type="OBJECT"/>
                /// </signature>
                /// <signature>
                ///     <summary>Copy object to target</summary>
                ///     <param name="target" type="OBJECT">Target object</param>
                ///     <returns type="OBJECT"/>
                /// </signature>
            },
            validate    : function (properties) {
                /// <signature>
                ///     <summary>Validate object. Return FALSE, if validation is failed</summary>
                ///     <param name="properties" type="ARRAY">Array of validators like { name : [name of property], type: [type of property], value : [default value if value isn't defined], values : [possible values]} </param>
                ///     <returns type="OBJECT"/>
                /// </signature>
            },
            isValueIn   : function (value, deep) {
                /// <signature>
                ///     <summary>Returns TRUE of value will be found in object</summary>
                ///     <param name="value" type="ANY">Value, which should be found</param>
                ///     <returns type="BOOLEAN"/>
                /// </signature>
                /// <signature>
                ///     <summary>Returns TRUE of value will be found in object</summary>
                ///     <param name="value" type="ANY">Value, which should be found</param>
                ///     <param name="deep" type="BOOLEAN">TRUE - check nested object; FALSE (default) - do not check nested objects</param>
                ///     <returns type="BOOLEAN"/>
                /// </signature>
            },
            getByPath   : function (path) {
                ///     <summary>Get property by path</summary>
                ///     <param name="path"      type="any"      >Path to property</param>
                ///     <returns type="any">Final value or UNDEFINED</returns>
            },
            findBy      : function (path, value, multiple) {
                /// <signature>
                ///     <summary>Search defined value in properties of object</summary>
                ///     <param name="path"      type="any"      >Path to property</param>
                ///     <param name="value"     type="any"      >Compared value</param>
                ///     <returns type="any">Match(s)</returns>
                /// </signature>
                /// <signature>
                ///     <summary>Search defined value in properties of object</summary>
                ///     <param name="path"      type="any"      >Path to property</param>
                ///     <param name="value"     type="any"      >Compared value</param>
                ///     <param name="multiple"  type="boolean"  >True - return all matches; False - return only first</param>
                ///     <returns type="any">Match(s)</returns>
                /// </signature>
            },
            createInstanceClass: function () {
                ///     <summary>
                ///         Create instance of class with closed variables
                ///     </summary>
                ///     <param name="parameters"    type="object">Parameters of class:  &#13;&#10;
                ///     {   [function]              constr,                             &#13;&#10;
                ///         [function]              parent                              &#13;&#10;
                ///         [object]                privates,                           &#13;&#10;
                ///         [function || object]    prototype                           &#13;&#10;
                ///     }</param>
                ///     <returns type="object">Instance of class</returns>
            },
            binding: function () {
                /// <signature>
                ///     <summary>Group of functionality for bindings</summary>
                /// </signature>
                return {
                    bind: function (property, handle) {
                        /// <signature>
                        ///     <summary>Bind handle to property of object</summary>
                        ///     <param name="property" type="STRING">Property</param>
                        ///     <param name="handle" type="FUNCTION">Handle of property changing</param>
                        ///     <returns type="STRING"/>
                        /// </signature>
                    },
                    unbind: function (property, id) {
                        /// <signature>
                        ///     <summary>Unbind handle to property of object by handle's ID</summary>
                        ///     <param name="property" type="STRING">Property</param>
                        ///     <param name="id" type="STRING">ID of handle</param>
                        ///     <returns type="BOOLEAN"/>
                        /// </signature>
                    },
                    kill: function (property) {
                        /// <signature>
                        ///     <summary>Unbind all handles, which was attached to property of object</summary>
                        ///     <param name="property" type="STRING">Property</param>
                        ///     <returns type="BOOLEAN"/>
                        /// </signature>
                    },
                };
            }
        };
    };
})();