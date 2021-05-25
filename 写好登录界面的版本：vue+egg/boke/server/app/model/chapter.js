module.exports = app => {
    const { STRING,DOUBLE,INTEGER,} = app.Sequelize;
    //默认情况下 sequelize讲座自动给模型名称加s
    const Chapter= app.model.define(
        'chapter',
        //会自动生成id
        {
            //id: INTEGER,
            tile: STRING,
            orderby:INTEGER
        }
    )
    Chapter.associate=function(){
        app.model.Chapter.belongsTo(
            app.model.Book,{
                foreignKey:'book_id',
                as:'book'
            }
        )
    }
    return Chapter;
}