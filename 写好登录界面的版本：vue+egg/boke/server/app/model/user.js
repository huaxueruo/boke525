module.exports = app => {
    const { STRING,DOUBLE,INTEGER,} = app.Sequelize;
    //默认情况下 sequelize讲座自动给模型名称加s
    const User= app.model.define(
        'user',
        //会自动生成id
        {
            //id: INTEGER,
            username: STRING,
            password:STRING,
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
    return User;
}