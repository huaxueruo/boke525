module.exports = app => {
    const { STRING,DOUBLE,INTEGER,TEXT} = app.Sequelize;
    //默认情况下 sequelize讲座自动给模型名称加s
    const Section= app.model.define(
        'section',
        //会自动生成id
        {
            //id: INTEGER,
            tile: STRING,
            orderby:INTEGER,
            md_text:TEXT,       
            html_text:TEXT, 

        }
    )
    Section.associate=function(){
        app.model.Section.belongsTo(
            app.model.Chapter,{
                foreignKey:'chapters_id',
                as:'chapter'
            }
        )
    }
    return Section;
}