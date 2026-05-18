<template>
  <div class="skeleton">
    <div class="skeleton-bar title" />
    <div class="skeleton-bar subtitle" />
    <div class="skeleton-bar line w80" />
    <div class="skeleton-bar line w60" />
    <div class="skeleton-bar line w90" />
    <div class="skeleton-bar line w45" />
    <div class="skeleton-card" />
    <div class="skeleton-bar line w70" />
    <div class="skeleton-bar line w85" />
    <div class="skeleton-bar line w50" />
  </div>
</template>

<style scoped>
.skeleton {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.5rem 0;
}

.skeleton-bar {
  height: 1rem;
  background: linear-gradient(
    90deg,
    var(--border) 25%,
    var(--bg-soft) 50%,
    var(--border) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 4px;
}

.skeleton-bar.title {
  height: 2rem;
  width: 55%;
  margin-bottom: 0.5rem;
}

.skeleton-bar.subtitle {
  height: 0.85rem;
  width: 35%;
  margin-bottom: 1rem;
}

.skeleton-bar.line {
  height: 0.85rem;
}

.skeleton-bar.w80 { width: 80%; }
.skeleton-bar.w70 { width: 70%; }
.skeleton-bar.w60 { width: 60%; }
.skeleton-bar.w90 { width: 90%; }
.skeleton-bar.w85 { width: 85%; }
.skeleton-bar.w50 { width: 50%; }
.skeleton-bar.w45 { width: 45%; }

.skeleton-card {
  height: 120px;
  background: linear-gradient(
    90deg,
    var(--border) 25%,
    var(--bg-soft) 50%,
    var(--border) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 0;
  margin: 0.5rem 0;
  border: 1px solid var(--border);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
