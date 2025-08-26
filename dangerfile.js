import { warn } from "danger";

// 1. PR Description Check
if (!danger.github.pr.body || danger.github.pr.body.trim().length === 0) {
    warn("Please add a meaningful description to your Pull Request.");
}