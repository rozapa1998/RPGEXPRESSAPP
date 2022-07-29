import  * as SQLite  from "expo-sqlite"


const db = SQLite.openDatabase("stats.db")

//Inicializacion DB
export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx)=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS stats (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, stats INTEGER NOT NULL)', 
                [],
                ()=>{ resolve() },
                (_, err)=> {reject(err)})
        })
    })
    
    return promise;
}

//Instertar datos
export const insert = ( title , image, stats ) => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                "INSERT INTO stats (title,image,stats)VALUES(?,?,?)",
                [title,image,JSON.stringify(stats)],
                (_, result)=>{
                    console.warn(result)
                    resolve()
                },
                (_,err) => {
                    console.warn(err);
                    reject(err)
                }
            )
        })
    })
    return promise;
}

