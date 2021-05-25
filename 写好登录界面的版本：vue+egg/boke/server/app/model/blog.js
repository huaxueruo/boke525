module.exports = app => {
    const { STRING,TEXT} = app.Sequelize;
    //默认情况下 sequelize讲座自动给模型名称加s
    const Blog= app.model.define(
        'blog',
        //会自动生成id
        {
            //id: INTEGER,
            tile: STRING,
            img:STRING,
            md_text:TEXT,       
            html_text:TEXT, 
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
    return Blog;
}