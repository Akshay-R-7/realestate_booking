import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
        unique: true,
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
    },
    password:{
        type: 'string',
        required: true,
    },
    avatar : {
        type:'string',
        default : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAMAAACtIJvYAAAAM1BMVEX+/v68vb+9vb3b3N25ury6urrs7Oz5+fnw8PDBwcH29va2t7m/wMLg4ODT1NbKysrm5uYj9+auAAADxElEQVR4nO2c23LcIAxAw92AAf//19be9W6TTbwWAoTbcF7SzqQzZ7gIgeR+fAwGg8FgMChi0kHEDREW11vmjhPJcrmjuE2iv5iOSnHG2Q5fUSrqrk4uSsm+I1nsOF7a/uR085q7DVdQ/EBqI3SS8uydle+iFY5m7zmLHbS0OpFatcjXlrPvZm/HUu/EeDZ/t8GKtFLaA6QYU7RzmEBSjCdKKQ2Zv82KdLAS0IpJwsEy51HhgTdkVgFuRRhKEyBWPSCbQjfDpdhMFUmhO/A+hVS78PRc/mJFtbBAp83TiurUAQb2HarlnrPY18ThklacyCpL6pdb/Q8zSLXarxkZrhlFxSVPnGuezlNWJjMRWZlLZn0fIiNDFmRWU8ZtgvBSf/ia9m2oKK+pC9RKLYRWxsKkeKK7Dq4ssNcPTzlUKwmy4ElX1cbEATGLLII+Acxhj/fa08yB+qVv1zp52e4itWq9qwL0GamNoA5nscdj+4PpIFmWiXz3fSFYfyvFPVj/JL3tOFA7OlmuNvjtB7epb3XwgdEhpmStTUkE3b+SOhj8DpxegjgmLNS70WkxSy/P8J7FZaLJkV1I9vj8ez16JEvtey7ckrzikDz0yRrxuWh5LBoBvgi+DBlrdlwftJ8AvXyb4xE7Tg+Uqn851PZt+wmArdtI1PUSrGygdqpmg87CH2HOvKolhJqXzt5nrUq3jMXnBagT6ix68KsQFFlBC/j6Qqulqzux8rca10Kq+A0X3HqSS0ncymjyyKRgDk296PlKQTQVFaPnK+h9aPKKpnl4bGIDbJPDobAnT1Z1Mhts5TevkpsLx13Mmi4rdH/k1G4D3qxwsSE0lcIu96yidzZc4cJ7szNw17KYOAqttqGtOMbKtV3s6z0Mkze4ZifzjsQUD5fWVh6T+mW0B+BA3cFiaytU5pfT4EFnBfkwooz5mlb5Acu0t2L5uYyr+bZQzQrUGlAGorGAwio/7yOwYsMKzDVnELHaQR+9FZIfGQiiKCK2X/R0bp7JoPIrwCeeZaDa6xpf6JnCPTRkfQyUDcc+FTV9KcKXKIJstLY4lwXf9x5/KF+GUqmkrcCUVHUPkejnxwdTqlOw/IytUILWkVVbXuuRL1mlOq+LdmtFqyCllK34H3CYJXJww8chUqVQuU6/is0Sv/bXfzm3aQExWiTr77UB2ITeasOcK8+TaNkuY6YQ965HgNT2a9YmQdJZ5KZFxLR3O/08X9J7L+cUBVWv0wNjnF7tYkpp/oud17/H1UY7Q+vzo+Gd7iaDwWAwGPzr/AEaBDKikGy3AwAAAABJRU5ErkJggg=='
    },
    
}, {timestamps:true})

const User = mongoose.model('User', userSchema)

export default User;