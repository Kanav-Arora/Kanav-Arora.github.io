---
title: "Debugging is a process of making the problem smaller"
pubDate: 2026-07-12
description: "A calm, repeatable approach to finding the cause of a bug without changing five things at once."
tags:
  - Engineering
  - Workflow
---

When a bug is confusing, the instinct is often to change several things and see whether the symptoms disappear. That can produce a quick result, but it rarely produces an explanation.

A better debugging loop is deliberately small: observe, form one hypothesis, run an experiment, and keep the result. The goal is not only to make the error go away; it is to reduce uncertainty about why it happened.

## Write down what is actually happening

Capture the smallest reliable reproduction you can. Record the input, the expected result, the actual result, and any relevant environment details. A precise reproduction prevents an intermittent symptom from turning into a collection of guesses.

If the failure is inconsistent, change one variable at a time: data, timing, configuration, or environment. That turns “sometimes it breaks” into evidence you can compare.

## Make one prediction

Before changing code, state what you think is wrong and what observation would support that idea. For example: “This request is using an expired cache entry; clearing the cache should make the next response correct.”

If the experiment does not behave as predicted, update the hypothesis. Do not quietly add another unrelated change and call the whole attempt a fix.

## Preserve the signal

Logs and tests are most helpful when they expose the boundary where behavior changes. Add enough context to identify the relevant input and state, but avoid flooding output with data that obscures the event.

Once the cause is understood, turn the reproduction into a regression test when practical. The test records the failure in a form the next change can verify automatically.

## Leave a trail

A short note about the cause, the experiment, and the final fix can save the next person an hour. It also makes future debugging easier for you: the repository keeps the explanation, not just the patch.

The best debugging sessions often look uneventful from the outside. One careful question at a time is still progress.