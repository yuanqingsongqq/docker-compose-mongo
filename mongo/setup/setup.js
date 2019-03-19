db = db.getSiblingDB('davfang_offline');
db.createUser(
    {
        user: "davfang",
        pwd: "vfang666",
        roles: [
            { role: "dbOwner", db: "davfang_offline"}
        ]
    }
);
db.createCollection("estate_houses");