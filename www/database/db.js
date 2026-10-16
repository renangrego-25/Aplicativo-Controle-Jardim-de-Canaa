import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

const sqlite = new SQLiteConnection(CapacitorSQLite);

let db;

export async function conectarBanco() {
    if (db) return db;

    db = await sqlite.createConnection(
        'jardim_canaa',
        false,
        'no-encryption',
        1,
        false
    );

    await db.open();

    return db;

}

export async function consultarResumoFinanceiro() {
    const banco = await conectarBanco();

    const resultado = await banco.query(
        'SELECT * FROM resumo_financeiro'
    );

    return resultado.values?.[0] ?? {
        saldo_atual: 0,
        total_entradas: 0,
        total_saidas: 0
    };
}