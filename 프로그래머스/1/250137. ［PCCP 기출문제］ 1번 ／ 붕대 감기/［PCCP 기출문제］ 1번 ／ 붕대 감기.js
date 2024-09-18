function solution(bandage, health, attacks) {
    const maxHealth = health;
    const forCount = attacks[attacks.length - 1][0];
    const [time, sequenceHealth, addHealth] = bandage;
    let sequenceCount = 0;
    let attackIdx = 0;

    for (let i = 1; i <= forCount; i++) {
        if (i === attacks[attackIdx][0]) {
            const curAttack = attacks[attackIdx];
            health -= curAttack[1];
            attackIdx++;
            sequenceCount = 0;

            if (health <= 0) return -1; // 체력이 0 이하면 -1 반환
        } else {
            sequenceCount++;
            health = Math.min(health + sequenceHealth, maxHealth);

            if (sequenceCount === time) {
                health = Math.min(health + addHealth, maxHealth);
                sequenceCount = 0;
            }
        }
    }

    return health;
}