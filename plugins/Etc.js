export let etc = {
    querydatafromfirestore: async function (referance) {
        let variables = {
            counter: 0,
            data: [],
            length: 0
        }
        referance.then(snap => {
            //assign
            variables.length = snap.docs.length

            //handle
            snap.forEach(doc => {
                variables.data.push({
                    _key: doc.id,
                    ...doc.data()
                })
            })

            //counter
            variables.counter += 1
        })

        // variables.length == variables.counter ? variables.data : false
        if (variables.length == variables.counter) {
            return variables.data
        }

    }
    // referance
}