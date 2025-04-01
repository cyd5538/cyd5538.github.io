---
slug: nextjs-image-priority
title: Next.js Image 컴포넌트의 priority 속성으로 웹 성능 최적화하기
authors: [Yjin]
tags: [Nextjs, Image, priority]
---

# 문제
최근 하고있는 프로젝트에서 `최근 본 레시피`를 보여주는 캐러셀 컴포넌트를 개발하던 중 성능 최적화 이슈가 발생했습니다. 이 캐러셀은 여러 레시피 이미지를 포함하고 있었는데, 다음과 같은 고민이 생겼습니다
1. 모든 이미지를 한꺼번에 로드하면 초기 페이지 로딩 속도가 느려질 수 있음
2. 사용자는 처음에 첫 번째 이미지만 보게 되므로, 보이지 않는 이미지까지 빠르게 로드할 필요가 있을까?
3. 캐러셀의 특성상 처음 1-2개 이미지만 우선적으로 보여주고, 나머지는 사용자가 클릭할 때 로드하는 것이 효율적이지 않을까?

# priority 속성 
Next.js Image 컴포넌트의 priority 속성을 활용하여 이 문제를 해결했습니다.

:::tip priority 속성이란?
priority 속성은 특정 이미지를 우선적으로 로드할 수 있게 해주는 속성입니다.
- 페이지 로드 시 즉시 사전 로드됨
- 지연 로딩(lazy loading)이 적용되지 않음
- LCP 성능 향상에 도움이 됨
:::

# 구현 코드
성능 최적화를 위해 캐러셀의 처음 2개 이미지에만 priority 속성을 적용하는 방법을 사용했습니다.
```tsx
<CarouselItem key={index} className="basis-full">
  <div className="flex flex-col h-full">
    <div className="relative w-full h-[200px] mb-2 overflow-hidden rounded-md">
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover"
        quality={75}
        priority={index < 2} // 첫 2개 이미지에만 priority 적용
      />
    </div>
    <Link href={`recipe?id=${data.id}`}>
      <div className='text-center mt-2 cursor-pointer hover:underline truncate px-2'>{data.title}</div>
    </Link>
  </div>
</CarouselItem>
```
index < 2 조건을 사용하여 배열의 첫 두 이미지(인덱스 0과 1)만 우선순위를 갖도록 설정했습니다. 이렇게 하면 사용자가 첫 화면에서 볼 가능성이 높은 이미지만 빠르게 로드되고, 나머지는 필요할 때 로드됩니다.

# 적용 결과
- 캐러셀의 첫 번째 이미지가 즉시 로드되어 사용자 경험 향상
- 페이지 초기 로드 시간 단축
- 필요한 이미지만 우선적으로 로드하여 전체적인 성능 개선