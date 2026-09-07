# How I Use AI to Code

There is no doubt that AI has massively increased productivity for software engineers. However, simply prompting often does not yield consistent or adequate results. With rapidly changing software releases, the need for effective tests, and the constant work of documentation, AI can quickly turn a well-maintained project into “slop.” We’ve all seen those LinkedIn posts of an AI agent “fixing” some bug with a 300,000+ line commit diff. That said, the way we use AI has become increasingly important, and I would like to share the way I use it to enhance my productivity in a safe and stable way.

I don’t use AI to avoid thinking. I use it to spend less time on the mechanical parts of software work and more time on the actual judgment. That has made a real difference for me.

## The Harness and the Model

My choice of harness is GitHub Copilot and Codex. I use these mainly because of their generous free tiers, but both serve a distinct part of my workflow.

I reach for GitHub Copilot when I want quick refactors, targeted edits, test fixes, and code explanations on a smaller scale. Microsoft has released *autopilot* mode, which behaves more like Claude Code and Codex, but I choose to use GitHub Copilot because it is very easy to review the diffs. I find Copilot most helpful when I am manually writing code and want it to make focused updates. I use both inline prompts and `TODO` comments for these types of changes.

Codex, on the other hand, is the tool I use when I want more autonomy. It is useful for prototype-heavy work, larger refactors, and repo-wide changes where I want the agent to explore the codebase, make a coherent set of edits, and then come back with something I can review. I still check the output carefully, but I do not need to micromanage every file.

When starting a project or building a larger-scope feature, I often start with Codex to try out multiple approaches, evaluate the best one, and then refine with GitHub Copilot.

For the model itself, I use GPT-5.6 Luna with Codex at `xhigh` reasoning in plan mode and `high` reasoning during execution. I find it fast and capable enough for the kinds of work I do. It is also one of the more cost-effective frontier models available. In GitHub Copilot, I generally use auto mode, which routes my prompt to the most appropriate model based on the scope and difficulty of the task. The important thing for me is not chasing the “best” model, but using a model that is strong enough to help me move quickly without sacrificing control.

I also lean heavily on plan mode. For me, the value is not just in generating a plan, but in reviewing that plan before the agent starts executing. That gives me a chance to catch bad assumptions early, tighten the scope, and make sure the work stays aligned with the real problem. In both Copilot and Codex, I get better oversight and more reliable results when I force the model to think in stages, using chain-of-thought prompting, instead of jumping straight into code.

## My config lives in one place, and it is designed to be reused

I keep the setup for my AI workflow in my [ai-config repository](https://github.com/arjunsudheer/ai-config). It contains a shared set of reusable agent skills and subagent definitions for both GitHub Copilot and Codex.

The important detail is that my Copilot and Codex settings are mirrored, so I treat them as one configuration model rather than two separate worlds. The repo keeps that in parallel in the two agent trees: the Copilot agent definitions live under [.github/agents](https://github.com/arjunsudheer/ai-config/tree/main/.github/agents), while the Codex definitions live under [.codex/agents](https://github.com/arjunsudheer/ai-config/tree/main/.codex/agents). The actual sync is handled by [scripts/sync-config.sh](https://github.com/arjunsudheer/ai-config/blob/main/scripts/sync-config.sh), which copies the latest setups into the local global config directories so the same workflows stay available everywhere.

That matters because I do not want to re-learn or reconfigure my behavior every time I switch tools. I want the same ideas to show up in both interfaces.

## AGENTS.md provides project-specific context

Project-level context matters a lot more than people expect. I keep that in AGENTS.md for each repo I work in, and it is one of the most useful parts of the setup.

For this site, AGENTS.md explains the structure of the project, the package manager, the deployment assumptions, the route setup, and the rules around how blog content is expected to work. That helps because a good AI agent can otherwise make a technically valid change that is still wrong for the repository.

In other words, AGENTS.md is the local grounding layer. It keeps the agent from drifting into generic responses. I write a custom AGENTS.md for each project.

## Skills and subagents make the workflow consistent

If I only used prompt text, every session would start from scratch. I avoid that by using shared skills and custom subagents.

The most important skill is the one in [.agents/skills/guided-code-updates/SKILL.md](https://github.com/arjunsudheer/ai-config/blob/main/.agents/skills/guided-code-updates/SKILL.md). It is essentially my default operating model for code changes: research before editing, keep the patch narrow, delegate documentation and tests when useful, and verify before calling it done.

That workflow is important because it stops me from making the worst mistake when using AI: letting the assistant wander into a broad refactor because it was “helpful.” The skill helps me keep AI-assisted changes small, deliberate, and verifiable.

I also use custom subagents for the work that deserves separation. The definitions are mirrored in both ecosystems, and the examples are visible in:

- [.codex/agents/documentor.toml](https://github.com/arjunsudheer/ai-config/blob/main/.codex/agents/documentor.toml)
- [.codex/agents/test-writer.toml](https://github.com/arjunsudheer/ai-config/blob/main/.codex/agents/test-writer.toml)
- [.github/agents/documentor.agent.md](https://github.com/arjunsudheer/ai-config/blob/main/.github/agents/documentor.agent.md)
- [.github/agents/test-writer.agent.md](https://github.com/arjunsudheer/ai-config/blob/main/.github/agents/test-writer.agent.md)

The `documentor` agent is for focused documentation updates. This may include updating inline comments, docstrings, `README.md`, or a wiki. The `test-writer` agent exists for writing tests on new behavior that is added to the project or updating tests when the behavior changes. This helps me keep the project verifiable and gives me confidence that the project works as intended. Of course, I still review the test outputs to make sure the agent is not “cheating” by writing an invalid test.

## MCP servers give the agent extra senses

The other part of my setup is MCP. I use the Playwright, fetch, and Context7 MCP servers in my editor configuration.

Context7 allows the agent to fetch up-to-date documentation based on the request I make. This may include new language or library features. One problem I have noticed with AI-assisted development is that the agent will sometimes write changes for an outdated or older version and even use deprecated features. This is, of course, not desirable behavior, and the Context7 MCP server has largely removed this annoyance from my workflow.

The Playwright MCP server is mainly used for verifying web pages, since it allows the agent to inspect the browser, navigate pages, and verify that a UI behaves the way I expect. Since most of my projects involve some form of web development, I find the Playwright MCP server useful. The fetch MCP server is kept more as a backup in case the agent does not get meaningful information from Context7. It allows the agent to read webpages as Markdown, which can be useful for well-known documentation references while being far more lightweight than Playwright for the same kind of task.

I have explicitly mentioned when the agent should use the MCP servers I have made available to it in the [guided-code-updates](https://github.com/arjunsudheer/ai-config/blob/main/.agents/skills/guided-code-updates/SKILL.md) skill.

## What a typical session looks like

For a small fix, I usually start with Copilot in the file I am already editing. I ask a focused question, ask for the likely implementation surface, make the change, and validate it with the narrowest test or check that is relevant. It is fast, local, and low-friction.

For a larger or more exploratory task, I use Codex with a more explicit outcome in mind. I explain what should happen, what constraints matter, and how success should be measured. Then I let it explore the repo, make a sensible set of edits, and come back with something I can review.

The key is that I review the agent’s work. I look for scope creep, wrong abstractions, hidden instability, and places where the solution is too clever for the problem. That helps me use AI productively while still keeping the project source code clean and maintainable.

## The Impact

The reason I have built this workflow is not because I am trying to impress anyone with AI usage. It is because I want the tools to fit the way I actually work.

For me, the real value of AI is not speed for speed’s sake. It is leverage. I can prototype faster, understand unfamiliar code faster, and spend more time on the important parts of building software rather than the tedious parts of writing it. That improves the quality of my work because it gives me more room to think about product decisions, edge cases, and design quality.

That said, I still keep the human in the loop. I still decide what matters. I still review. I still reject fluff. I still make sure the implementation fits the system and not just the prompt.

The best AI workflow is not the one that delegates the most. It is the one that keeps me clear enough to stay in control while moving faster than I could on my own.
