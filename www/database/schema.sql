CREATE TABLE IF NOT EXISTS caixa (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    valor_inicial INTEGER NOT NULL DEFAULT 0
);

INSERT OR IGNORE INTO caixa (id, valor_inicial)
VALUES (1, 0);

CREATE TABLE IF NOT EXISTS entradas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor INTEGER NOT NULL CHECK (valor > 0),
    data TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS saidas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor INTEGER NOT NULL CHECK (valor > 0),
    data TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE VIEW IF NOT EXISTS resumo_financeiro AS
SELECT
    caixa.valor_inicial
        + COALESCE((SELECT SUM(valor) FROM entradas), 0)
        - COALESCE((SELECT SUM(valor) FROM saidas), 0) AS saldo_atual,
    COALESCE((SELECT SUM(valor) FROM entradas), 0) AS total_entradas,
    COALESCE((SELECT SUM(valor) FROM saidas), 0) AS total_saidas
FROM caixa
WHERE caixa.id = 1;

/*Tabela de pedidos*/

CREATE TABLE IF NOT EXISTS pedidos{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente TEXT NOT NULL,
    telefone TEXT,
    cep TEXT,
    endereco TEXT,
    cidade TEXT,
    estado TEXT,
    produto TEXT NOT NULL,
    quantidade INTEGER NOT NULL DEFAULT 1 CHECK (quantidade > 0),
    tipo TEXT NOT NULL DEFAULT 'padrao',
    valor_total INTEGER NOT NULL DEFAULT 0 CHECK (valor_total >= 0),
    pagamento TEXT NOT NULL DEFAULT 'pix',
    data_entrega TEXT,
    status TEXT NOT NULL DEFAULT 'pendente'
        CHECK (status IN ('pendente', 'producao', 'enviado', 'entregue')),
    observacoes TEXT,
    criado_em TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
}