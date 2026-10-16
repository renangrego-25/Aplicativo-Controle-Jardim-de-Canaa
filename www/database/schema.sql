CREATE TABLE IF NOT EXISTS caixa (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    valor_inicial REAL NOT NULL DEFAULT 0
);

INSERT OR IGNORE INTO caixa (id, valor_inicial)
VALUES (1, 0);

CREATE TABLE IF NOT EXISTS entradas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor REAL NOT NULL CHECK (valor > 0),
    data TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS saidas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor REAL NOT NULL CHECK (valor > 0),
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