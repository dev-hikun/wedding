import { useMemo, type MutableRefObject, type Ref, type RefCallback } from 'react';

const useForkRef: <Instance extends Element = Element>(
  refs: Array<Ref<Instance> | undefined>
) => RefCallback<Instance> | null = (refs) =>
  useMemo(() => {
    if (refs.every((ref) => ref === null)) return null;
    return (instance) => refs.forEach((ref) => setRef(ref, instance));
  }, [refs]);

const setRef: <T>(
  ref: MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
  value: T | null
) => void = (ref, value) => {
  if (typeof ref === 'function') ref(value);
  else if (ref) ref.current = value;
};

export default useForkRef;
