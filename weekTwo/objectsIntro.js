let carA = {
    color: "blue",
    model: 2009,
    automatic: true,
    dim: [1, 2, 3, 4]
}
console.log(carA)
console.log(carA.dim)
console.log(carA.color)

let person = {
    name: "nadia",
    age: 23,
    race: "asian",
    job: {
        role: "QA",
        exp: 4,
        company: "emumba",
        project: [
            {
                nameOf: 'ZTA',
                roleInProject: "Lead"
            },
            {
                nameOf: "Test",
                roleInProject: "QA"
            }

        ]
    }
}
console.log(person.job.project[1])

let loginTestData={
    testData: [
        {
            email : "abc@sdfds.com",
            pass: "dfsdf"
        }
        ,
        {
            email : "adfasdf",
            pass: "Aasdg"
        },
        {
            email : "Asdfas",
            pass: "Asdfas"
        },
        {
            email : "ASDf",
            pass: ""
        }
    ]
}
for(let i=0 ; i<=loginTestData.testData.length;i++){
    console.log(loginTestData.testData[i])
}
