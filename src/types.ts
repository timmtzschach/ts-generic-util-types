export type AllKeys<T> = T extends T ? keyof T : never;

export type UnionObjectsToIntersection<UnionObjs> = {
    [UnionObjsKeys in AllKeys<UnionObjs>]: Extract<UnionObjs, { [UnionObjs in UnionObjsKeys]: unknown}>[UnionObjsKeys]
};

export type PickByType<Obj extends object, Type> = {
    [ObjKey in keyof Obj as Obj[ObjKey] extends never ? never : Type extends Obj[ObjKey] ? ObjKey : never]: Obj[ObjKey];
};

export type ObjectToUnion<Obj extends object> = {
    [ObjKey in keyof Obj]: { [ObjKey2 in ObjKey]: Obj[ObjKey]; };
}[keyof Obj];
