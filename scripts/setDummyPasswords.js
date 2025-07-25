// scripts/setDummyPasswords.js
const bcrypt = require('bcrypt');
const prisma = require('../src/models/prismaClient');

async function setDummyPasswords() {
    const users = await prisma.user.findMany({
        where: { password: null },
    });

    if (users.length === 0) {
        console.log('Semua user sudah punya password.');
        return;
    }

    const hashedPassword = await bcrypt.hash('password123', 10);

    for (const user of users) {
        await prisma.user.update({
            where: { id: user.id },
            data: { password: hashedPassword },
        });
        console.log(`✅ Updated password for user: ${user.email}`);
    }

    console.log('\n✅ Semua user berhasil diupdate dengan password dummy.');
}

setDummyPasswords()
    .catch((err) => {
        console.error('❌ Error:', err);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
