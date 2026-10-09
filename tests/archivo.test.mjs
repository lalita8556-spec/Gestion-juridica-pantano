import test from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
import {readFileSync} from 'node:fs';
async function cargar(path){const source=ts.transpileModule(readFileSync(new URL(path,import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}}).outputText;return import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));}
const {normalizarRadicado,sugerirCategoria,coincidenciasRadicado}=await cargar('../archivo.ts');
test('normaliza espacios, guiones y mayúsculas para evitar radicados duplicados',()=>assert.equal(normalizarRadicado(' demo – 018 — 2026 '),'DEMO-018-2026'));
test('clasifica nombres ficticios y deja desconocidos sin categoría',()=>{assert.equal(sugerirCategoria('Concepto técnico.txt'),'Conceptos técnicos');assert.equal(sugerirCategoria('audio audiencia.txt'),'Audiencias y transcripciones');assert.equal(sugerirCategoria('desconocido.txt'),null);});
test('conserva todos los candidatos ambiguos para revisión humana',()=>assert.deepEqual(coincidenciasRadicado('DEMO-018-2026_DEMO-019-2026.pdf',['DEMO-018-2026','DEMO-019-2026','DEMO-020-2026']),['DEMO-018-2026','DEMO-019-2026']));
