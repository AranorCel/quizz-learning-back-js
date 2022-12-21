import mongoose from "mongoose"

export default () => {
    mongoose.set("strictQuery", false);

    mongoose.connect(`mongodb://${process.env.DBHOSTNAME}:${process.env.DBPORT}/${process.env.DBNAME}`)

    mongoose.connection.on("error", () => { console.log(`Connexion impossible avec la DB ${process.env.DBNAME}`) })

    mongoose.connection.on("open", () => { console.log(`Connexion établie avec la DB ${process.env.DBNAME}`) })
}