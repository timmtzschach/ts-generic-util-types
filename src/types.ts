export type Keys<T> = T extends T ? keyof T : never;

export type UnionObjectsToIntersection<Union> = {
    [UnionKeys in Keys<Union>]: Extract<Union, { [KeysOfUnionKey in UnionKeys]: unknown; }>[UnionKeys];
};

export type PickByType<Obj extends object, Type> = {
    [ObjKey in keyof Obj as Obj[ObjKey] extends never ? never : Type extends Obj[ObjKey] ? ObjKey : never]: Obj[ObjKey];
};

export type ObjectToUnion<Obj extends object> = {
    [ObjKey in keyof Obj]: { [NestedObjKey in ObjKey]: Obj[ObjKey]; };
}[keyof Obj];
