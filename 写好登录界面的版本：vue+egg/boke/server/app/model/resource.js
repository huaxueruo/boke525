module.exports = app => {
    const { STRING,DOUBLE,INTEGER,} = app.Sequelize;
    //默认情况下 sequelize讲座自动给模型名称加s
    const Resource= app.model.define(
        'resource',
        //会自动生成id
        {
            //id: INTEGER,
            tile: STRING,
            code:STRING,
            url:STRING
        }
    )
    // Student.associate=function(){
    //     app.model.Student.belongsTo(
    //         app.model.Clazz,{
    //             foreignKey:'clazz_id',
    //             as:'clazz'
    //         }
    //     )
    // }
    return Resource;
}