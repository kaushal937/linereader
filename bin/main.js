const fs = require('fs')

function main(path){
    fs.readFile(path, "utf-8", (err, data)=>{
        if(data){
            let name = "./expression.txt"
            let val = data.split(/\r\n|\n/)
            fs.writeFileSync(name.toString(), "["+val.toString()+"]")
        }else if(err){
            console.log("error")
            return
        }
    })
}

main("./target.txt")