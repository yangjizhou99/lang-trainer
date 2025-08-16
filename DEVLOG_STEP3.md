# DEVLOG Step 3

## What we built
- API: /api/generate/sft-task (DeepSeek, model-select)
- API: /api/eval (DeepSeek, model-select)
- Page: /practice/sft
- Home link updated

## How to run
- pnpm dev
- http://localhost:3000/practice/sft

## Screenshots
- public/step3-sft.png

## Notes / Issues
- 非 JSON 返回已做 fallback 解析
- 分数归一化为 1..5，附 overall 平均分
- 可切换 deepseek-chat / deepseek-reasoner
