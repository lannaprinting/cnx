import {fireDb} from '@/plugins/Firebase'
import {etc} from '@/plugins/Etc'
import _ from 'lodash'

class Firestore {
    constructor (refName) {
        try {
            this.REF = fireDb.collection(refName) 
            this.getCollection()
        }catch(err) {
            console.log(err)
        }
        // return fireDb
    }

    getCollection = () => {
        let data = []
        let counter = 0
        let length = 0
        
        this.REF.get().then(querySnapshot => {
            // asign length
            length = querySnapshot.docs.length
            querySnapshot.forEach(doc => {
                data.push({
                    _key: doc.id,
                    ...doc.data()
                })
                // counter
                counter ++
            })
        })
        
        // if length equal counter return data
        if (counter == length) {
            this.data = data
        }
    }

    removeDocument = (_key) => {
        return new Promise((resolve, reject) => {
            try {
                this.REF.doc(_key).delete()
                this.onSnapshot().then(data => resolve(data))
            } catch (error) {
                console.log(error)      
            }
        })
    }

    addDocument = (data) => {
        return new Promise((resolve, reject) => {
            try {
                this.REF.add(data)
                this.onSnapshot().then(data => resolve(data))
            } catch (error) {
            console.log(error)
            }
        })
    }

    addDocumentByName = (data) => {
        try {
            this.REF.doc(data.value.value)
                .set(data)
        } catch (error) {
           console.log(error)
        }
    }

    onSnapshot = async (_key) => {
      return new Promise((resolve, reject) => {
        let data = []
        this.REF.onSnapshot(query => {
          query.docChanges().forEach(change => {
            // if added
            if (change.type == 'added') {
              data.push({
                _key: change.doc.id,
                ...change.doc.data()
              })

              resolve(data)
            }
            // if removed
            if (change.type === 'removed') {
              data = _.remove(data, event => {
                return event._key !== _key
              })
              resolve(data)
            }
          })
        })
      })
    }

     getWhere = (type, name) => {
        return new Promise((resolve, reject) => {
            let ref
            console.log(type, name)
            if (name == '') ref = this.REF.get()
            else ref = this.REF.where(type, '==', name).get()
            resolve(etc.querydatafromfirestore(ref))
        })
    }

    getDocumentByName = (docName) => {
        return new Promise((resolve, reject) => {
            this.REF.doc(docName).get().then(doc => {
                // console.log(doc)
                resolve(doc.data())
            })
        })
    }

    updateDocumentByName = (docName, data) => {
        return new Promise((resolve, reject) => {
            this.REF.doc(docName).set({
                ...data
            }, {merge: true})

            // this.onSnapshot().then(data => resolve(data))
        })
    }
}

export default Firestore
