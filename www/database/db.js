import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";
import schema from "./schema.sql?raw"

const sqlite = new SQLiteConnection(CapacitorSQLite);

let conexao = null;

export function conectarBanco() {
    if(!conexao) {
        conexao = (async () => {
            const existe = (await sqlite.isConnection('jardim_canaa', false)).result;
            const db = existe
              ? await sqlite.retrieveConnection('jardim_canaa', false)
              : await sqlite.createConnection('jardim_canaa', false, 'no-encryption', 1, false);

      await db.open();
      await db.execute(schema);     
      return db;
    })().catch((erro) => { conexao = null; throw erro; });   // permite tentar de novo
  }
  return conexao;
};

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