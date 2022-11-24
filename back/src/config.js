const dotenv =require ('dotenv')
dotenv.config()

module.exports={
firebaseConnection:{
        type: "service_account",
        project_id: "ecommerce-backend-a6bdd",
        private_key_id: "318bf15144dcfee92fa93814038cac095d88212c",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCZTPSeMKOGKnJH\nIGpcuOPv2N5dYWQMuImSlQjtKcVj3dGdGxKs8FGPxOk00CoZANGg7YsT7IZiPN/U\n/WAjxZ+AA2SJyhVmtLe+OU2OohLqXL7qLPdKc8y5zzwUcRxHrdoIe6q2phS9YAu/\nMn81cyoOEelBmFLl1N03bYzI9g1koe4YY2Od9g7350SNb9u0AqgWLTR/bSSbSHeJ\nBv5n+RJCt1KuHdDMEKRKzI3v2yY3rGWJQfsIHKsgB3ogHpFmUV6N5P2Pqb3Hhrj9\neF/SD6p0dgC1pVDf/FqqTSWnqZtBFzdVmWfgMTGR3rx6rbGl0ZFdwqF3OibCp/IZ\nalvJz5IRAgMBAAECggEABaYnUXj7XaNMyMAyCy6o/5qfPxOqqylVsHgbdxnV80Mm\nSULJImRMrR6VdWPCWV+FWgfG2zoZDZ+uo9ueYlMS+JWna8htl3ZLWxAjgoEIb2hx\nhJGZnz27KpGvZhVw9Fc8tJlSBh8CnqPeavJCa8bNou0YClnBnESGzlcUHAetIKsk\nTLr/QhizdcBGsX6CcV9fn5sIqewJAAHBmSfW7PrUlWPf3ciM8QXUjyQ0nfwp3Xaa\nu/sYNG9CPDDx9EHAcBXGSIM7qJX7cqUK2rMYWrOAx5sys3WmXBARQ6vu9WsPx4zP\nSNe4yLSV7PkuOX+c/GJJN8b/76Qnyxt8a8grP8eXnQKBgQDO809h229Y+YpGNaPb\nK1ipAwSbJ6cMWPqED9jB2wnzi2Dgw1u9eGaxPbvr5LCAOXbUfr3RiPXp1RI3L38z\nhBbwzhmJ+wt8JlS+7RUielt7p1WkywK4aK7ikqIaLfpBXxMrhpPlbGxItZxnoEjk\nSjYQKP00tKThkJhzC79M30ysbwKBgQC9onMYAsTgWOs0N6f3pFnAbbjytYNtKfMK\nl3ON+xkk101oTpHfbhVFGeqaZCCYCj5zMR6ySrx3yMQPZofCmt1sjX55bhIdhZUJ\nrImAW9pmOtfR1FZKsH/kdNMnUTBxdPsoyN9jPeFAd3AasNt5uItUCqobLMoey1Aa\nUjC55/vpfwKBgHRvrsUnGjHcTLEN8wAYFk0ZVpkZKUKoOWLeK51+aM3vKHWtVMt4\nl4a3bijdxXSPYE1UdeYTghCrAhGslovckK+xterNJXwXcOzvJUn9v8UFtAkA86nf\ntC3kRHIoVjo7jOSbVlDpvM7352TiaMCRBHP5K+Vgkbgbi7qG7H4K0O/fAoGBAJKq\nVLfKVHhrbSYKsacvfpb8haF5z3cbjbSwZBf4j37V4jF9KwcSPfMe0zqrnCXbLmer\nIuGkOdWu+iwrEW7qlbyCRsIl5m7cxOMhhYs3/1c3xXms7zx++7s2u6TZ/0yQvDvT\n+CnqTw+sEJEkHesrVt8eDGhOINjmSELDNJpkGIqDAoGBALNMvpNGKq7QGFELFQ84\nymAhNOdOV+RX7G6nsSEHz9gD7GuBAkcLuhbIFTznKCm4DocCal/9rVbTg+jpM++t\npGtFh/H3VP22uwXTj63B1rAwNB2NXo84hoPCX1q5F/JcnllS/O+HDl3b6x0z7JY/\nwCdlPe+ne68Dk1u+fOleacz3\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-kqyeb@ecommerce-backend-a6bdd.iam.gserviceaccount.com",
        client_id: "109858418297509904106",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kqyeb%40ecommerce-backend-a6bdd.iam.gserviceaccount.com"
      },
      mongodb:{
        connectionString:"mongodb+srv://lucianew:Backend2022@cluster0.taani6r.mongodb.net/test"
      }
}