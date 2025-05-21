
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model DiaDisciplinaMateria
 * 
 */
export type DiaDisciplinaMateria = $Result.DefaultSelection<Prisma.$DiaDisciplinaMateriaPayload>
/**
 * Model PlanoDeEstudos
 * 
 */
export type PlanoDeEstudos = $Result.DefaultSelection<Prisma.$PlanoDeEstudosPayload>
/**
 * Model HistoricoEstudo
 * 
 */
export type HistoricoEstudo = $Result.DefaultSelection<Prisma.$HistoricoEstudoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DisciplinaNome: {
  TI: 'TI',
  Ingles: 'Ingles',
  Portugues: 'Portugues',
  Estatistica: 'Estatistica',
  Atualidades: 'Atualidades',
  Bancarios: 'Bancarios',
  Matematica: 'Matematica',
  Simulado: 'Simulado',
  Revisoes: 'Revisoes',
  Redacao: 'Redacao'
};

export type DisciplinaNome = (typeof DisciplinaNome)[keyof typeof DisciplinaNome]


export const DiaDaSemana: {
  Domingo: 'Domingo',
  Segunda: 'Segunda',
  Terca: 'Terca',
  Quarta: 'Quarta',
  Quinta: 'Quinta',
  Sexta: 'Sexta',
  Sabado: 'Sabado'
};

export type DiaDaSemana = (typeof DiaDaSemana)[keyof typeof DiaDaSemana]


export const StatusConteudo: {
  pendente: 'pendente',
  em_progresso: 'em_progresso',
  concluido: 'concluido'
};

export type StatusConteudo = (typeof StatusConteudo)[keyof typeof StatusConteudo]

}

export type DisciplinaNome = $Enums.DisciplinaNome

export const DisciplinaNome: typeof $Enums.DisciplinaNome

export type DiaDaSemana = $Enums.DiaDaSemana

export const DiaDaSemana: typeof $Enums.DiaDaSemana

export type StatusConteudo = $Enums.StatusConteudo

export const StatusConteudo: typeof $Enums.StatusConteudo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diaDisciplinaMateria`: Exposes CRUD operations for the **DiaDisciplinaMateria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiaDisciplinaMaterias
    * const diaDisciplinaMaterias = await prisma.diaDisciplinaMateria.findMany()
    * ```
    */
  get diaDisciplinaMateria(): Prisma.DiaDisciplinaMateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planoDeEstudos`: Exposes CRUD operations for the **PlanoDeEstudos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanoDeEstudos
    * const planoDeEstudos = await prisma.planoDeEstudos.findMany()
    * ```
    */
  get planoDeEstudos(): Prisma.PlanoDeEstudosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoEstudo`: Exposes CRUD operations for the **HistoricoEstudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoEstudos
    * const historicoEstudos = await prisma.historicoEstudo.findMany()
    * ```
    */
  get historicoEstudo(): Prisma.HistoricoEstudoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Materia: 'Materia',
    DiaDisciplinaMateria: 'DiaDisciplinaMateria',
    PlanoDeEstudos: 'PlanoDeEstudos',
    HistoricoEstudo: 'HistoricoEstudo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "materia" | "diaDisciplinaMateria" | "planoDeEstudos" | "historicoEstudo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      DiaDisciplinaMateria: {
        payload: Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>
        fields: Prisma.DiaDisciplinaMateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiaDisciplinaMateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiaDisciplinaMateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>
          }
          findFirst: {
            args: Prisma.DiaDisciplinaMateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiaDisciplinaMateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>
          }
          findMany: {
            args: Prisma.DiaDisciplinaMateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>[]
          }
          create: {
            args: Prisma.DiaDisciplinaMateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>
          }
          createMany: {
            args: Prisma.DiaDisciplinaMateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiaDisciplinaMateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>[]
          }
          delete: {
            args: Prisma.DiaDisciplinaMateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>
          }
          update: {
            args: Prisma.DiaDisciplinaMateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>
          }
          deleteMany: {
            args: Prisma.DiaDisciplinaMateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiaDisciplinaMateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiaDisciplinaMateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>[]
          }
          upsert: {
            args: Prisma.DiaDisciplinaMateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaDisciplinaMateriaPayload>
          }
          aggregate: {
            args: Prisma.DiaDisciplinaMateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiaDisciplinaMateria>
          }
          groupBy: {
            args: Prisma.DiaDisciplinaMateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiaDisciplinaMateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiaDisciplinaMateriaCountArgs<ExtArgs>
            result: $Utils.Optional<DiaDisciplinaMateriaCountAggregateOutputType> | number
          }
        }
      }
      PlanoDeEstudos: {
        payload: Prisma.$PlanoDeEstudosPayload<ExtArgs>
        fields: Prisma.PlanoDeEstudosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanoDeEstudosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanoDeEstudosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>
          }
          findFirst: {
            args: Prisma.PlanoDeEstudosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanoDeEstudosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>
          }
          findMany: {
            args: Prisma.PlanoDeEstudosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>[]
          }
          create: {
            args: Prisma.PlanoDeEstudosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>
          }
          createMany: {
            args: Prisma.PlanoDeEstudosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanoDeEstudosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>[]
          }
          delete: {
            args: Prisma.PlanoDeEstudosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>
          }
          update: {
            args: Prisma.PlanoDeEstudosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>
          }
          deleteMany: {
            args: Prisma.PlanoDeEstudosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanoDeEstudosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanoDeEstudosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>[]
          }
          upsert: {
            args: Prisma.PlanoDeEstudosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanoDeEstudosPayload>
          }
          aggregate: {
            args: Prisma.PlanoDeEstudosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanoDeEstudos>
          }
          groupBy: {
            args: Prisma.PlanoDeEstudosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanoDeEstudosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanoDeEstudosCountArgs<ExtArgs>
            result: $Utils.Optional<PlanoDeEstudosCountAggregateOutputType> | number
          }
        }
      }
      HistoricoEstudo: {
        payload: Prisma.$HistoricoEstudoPayload<ExtArgs>
        fields: Prisma.HistoricoEstudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoEstudoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoEstudoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoEstudoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoEstudoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>
          }
          findMany: {
            args: Prisma.HistoricoEstudoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>[]
          }
          create: {
            args: Prisma.HistoricoEstudoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>
          }
          createMany: {
            args: Prisma.HistoricoEstudoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoEstudoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>[]
          }
          delete: {
            args: Prisma.HistoricoEstudoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>
          }
          update: {
            args: Prisma.HistoricoEstudoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoEstudoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoEstudoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoEstudoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoEstudoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoEstudoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoEstudoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoEstudo>
          }
          groupBy: {
            args: Prisma.HistoricoEstudoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoEstudoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoEstudoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoEstudoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    materia?: MateriaOmit
    diaDisciplinaMateria?: DiaDisciplinaMateriaOmit
    planoDeEstudos?: PlanoDeEstudosOmit
    historicoEstudo?: HistoricoEstudoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    materias: number
    agendamentos: number
    planosDeEstudo: number
    historicosEstudo: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | UserCountOutputTypeCountMateriasArgs
    agendamentos?: boolean | UserCountOutputTypeCountAgendamentosArgs
    planosDeEstudo?: boolean | UserCountOutputTypeCountPlanosDeEstudoArgs
    historicosEstudo?: boolean | UserCountOutputTypeCountHistoricosEstudoArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaDisciplinaMateriaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlanosDeEstudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanoDeEstudosWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoricosEstudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoEstudoWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    agendamentos: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | MateriaCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaDisciplinaMateriaWhereInput
  }


  /**
   * Count Type PlanoDeEstudosCountOutputType
   */

  export type PlanoDeEstudosCountOutputType = {
    registros: number
  }

  export type PlanoDeEstudosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | PlanoDeEstudosCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * PlanoDeEstudosCountOutputType without action
   */
  export type PlanoDeEstudosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudosCountOutputType
     */
    select?: PlanoDeEstudosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanoDeEstudosCountOutputType without action
   */
  export type PlanoDeEstudosCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaDisciplinaMateriaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materias?: boolean | User$materiasArgs<ExtArgs>
    agendamentos?: boolean | User$agendamentosArgs<ExtArgs>
    planosDeEstudo?: boolean | User$planosDeEstudoArgs<ExtArgs>
    historicosEstudo?: boolean | User$historicosEstudoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | User$materiasArgs<ExtArgs>
    agendamentos?: boolean | User$agendamentosArgs<ExtArgs>
    planosDeEstudo?: boolean | User$planosDeEstudoArgs<ExtArgs>
    historicosEstudo?: boolean | User$historicosEstudoArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      materias: Prisma.$MateriaPayload<ExtArgs>[]
      agendamentos: Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>[]
      planosDeEstudo: Prisma.$PlanoDeEstudosPayload<ExtArgs>[]
      historicosEstudo: Prisma.$HistoricoEstudoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materias<T extends User$materiasArgs<ExtArgs> = {}>(args?: Subset<T, User$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends User$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, User$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planosDeEstudo<T extends User$planosDeEstudoArgs<ExtArgs> = {}>(args?: Subset<T, User$planosDeEstudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicosEstudo<T extends User$historicosEstudoArgs<ExtArgs> = {}>(args?: Subset<T, User$historicosEstudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.materias
   */
  export type User$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * User.agendamentos
   */
  export type User$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    where?: DiaDisciplinaMateriaWhereInput
    orderBy?: DiaDisciplinaMateriaOrderByWithRelationInput | DiaDisciplinaMateriaOrderByWithRelationInput[]
    cursor?: DiaDisciplinaMateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiaDisciplinaMateriaScalarFieldEnum | DiaDisciplinaMateriaScalarFieldEnum[]
  }

  /**
   * User.planosDeEstudo
   */
  export type User$planosDeEstudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    where?: PlanoDeEstudosWhereInput
    orderBy?: PlanoDeEstudosOrderByWithRelationInput | PlanoDeEstudosOrderByWithRelationInput[]
    cursor?: PlanoDeEstudosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanoDeEstudosScalarFieldEnum | PlanoDeEstudosScalarFieldEnum[]
  }

  /**
   * User.historicosEstudo
   */
  export type User$historicosEstudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    where?: HistoricoEstudoWhereInput
    orderBy?: HistoricoEstudoOrderByWithRelationInput | HistoricoEstudoOrderByWithRelationInput[]
    cursor?: HistoricoEstudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoEstudoScalarFieldEnum | HistoricoEstudoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    ordem: number | null
  }

  export type MateriaSumAggregateOutputType = {
    ordem: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    titulo: string | null
    descricao: string | null
    status: $Enums.StatusConteudo | null
    ordem: number | null
    disciplina: $Enums.DisciplinaNome | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type MateriaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    titulo: string | null
    descricao: string | null
    status: $Enums.StatusConteudo | null
    ordem: number | null
    disciplina: $Enums.DisciplinaNome | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type MateriaCountAggregateOutputType = {
    id: number
    userId: number
    titulo: number
    descricao: number
    status: number
    ordem: number
    disciplina: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    ordem?: true
  }

  export type MateriaSumAggregateInputType = {
    ordem?: true
  }

  export type MateriaMinAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    descricao?: true
    status?: true
    ordem?: true
    disciplina?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type MateriaMaxAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    descricao?: true
    status?: true
    ordem?: true
    disciplina?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type MateriaCountAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    descricao?: true
    status?: true
    ordem?: true
    disciplina?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id: string
    userId: string
    titulo: string
    descricao: string | null
    status: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm: Date
    atualizadoEm: Date
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    ordem?: boolean
    disciplina?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    agendamentos?: boolean | Materia$agendamentosArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    ordem?: boolean
    disciplina?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    ordem?: boolean
    disciplina?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id?: boolean
    userId?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    ordem?: boolean
    disciplina?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "titulo" | "descricao" | "status" | "ordem" | "disciplina" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    agendamentos?: boolean | Materia$agendamentosArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      agendamentos: Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      titulo: string
      descricao: string | null
      status: $Enums.StatusConteudo
      ordem: number
      disciplina: $Enums.DisciplinaNome
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaWithIdOnly = await prisma.materia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agendamentos<T extends Materia$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Materia$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly id: FieldRef<"Materia", 'String'>
    readonly userId: FieldRef<"Materia", 'String'>
    readonly titulo: FieldRef<"Materia", 'String'>
    readonly descricao: FieldRef<"Materia", 'String'>
    readonly status: FieldRef<"Materia", 'StatusConteudo'>
    readonly ordem: FieldRef<"Materia", 'Int'>
    readonly disciplina: FieldRef<"Materia", 'DisciplinaNome'>
    readonly criadoEm: FieldRef<"Materia", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Materia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.agendamentos
   */
  export type Materia$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    where?: DiaDisciplinaMateriaWhereInput
    orderBy?: DiaDisciplinaMateriaOrderByWithRelationInput | DiaDisciplinaMateriaOrderByWithRelationInput[]
    cursor?: DiaDisciplinaMateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiaDisciplinaMateriaScalarFieldEnum | DiaDisciplinaMateriaScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model DiaDisciplinaMateria
   */

  export type AggregateDiaDisciplinaMateria = {
    _count: DiaDisciplinaMateriaCountAggregateOutputType | null
    _avg: DiaDisciplinaMateriaAvgAggregateOutputType | null
    _sum: DiaDisciplinaMateriaSumAggregateOutputType | null
    _min: DiaDisciplinaMateriaMinAggregateOutputType | null
    _max: DiaDisciplinaMateriaMaxAggregateOutputType | null
  }

  export type DiaDisciplinaMateriaAvgAggregateOutputType = {
    tempoEstudado: number | null
    progresso: number | null
  }

  export type DiaDisciplinaMateriaSumAggregateOutputType = {
    tempoEstudado: number | null
    progresso: number | null
  }

  export type DiaDisciplinaMateriaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dia: $Enums.DiaDaSemana | null
    materiaId: string | null
    planoId: string | null
    status: $Enums.StatusConteudo | null
    tempoEstudado: number | null
    anotacoes: string | null
    progresso: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type DiaDisciplinaMateriaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dia: $Enums.DiaDaSemana | null
    materiaId: string | null
    planoId: string | null
    status: $Enums.StatusConteudo | null
    tempoEstudado: number | null
    anotacoes: string | null
    progresso: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type DiaDisciplinaMateriaCountAggregateOutputType = {
    id: number
    userId: number
    dia: number
    materiaId: number
    planoId: number
    status: number
    tempoEstudado: number
    anotacoes: number
    progresso: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type DiaDisciplinaMateriaAvgAggregateInputType = {
    tempoEstudado?: true
    progresso?: true
  }

  export type DiaDisciplinaMateriaSumAggregateInputType = {
    tempoEstudado?: true
    progresso?: true
  }

  export type DiaDisciplinaMateriaMinAggregateInputType = {
    id?: true
    userId?: true
    dia?: true
    materiaId?: true
    planoId?: true
    status?: true
    tempoEstudado?: true
    anotacoes?: true
    progresso?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type DiaDisciplinaMateriaMaxAggregateInputType = {
    id?: true
    userId?: true
    dia?: true
    materiaId?: true
    planoId?: true
    status?: true
    tempoEstudado?: true
    anotacoes?: true
    progresso?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type DiaDisciplinaMateriaCountAggregateInputType = {
    id?: true
    userId?: true
    dia?: true
    materiaId?: true
    planoId?: true
    status?: true
    tempoEstudado?: true
    anotacoes?: true
    progresso?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type DiaDisciplinaMateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaDisciplinaMateria to aggregate.
     */
    where?: DiaDisciplinaMateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaDisciplinaMaterias to fetch.
     */
    orderBy?: DiaDisciplinaMateriaOrderByWithRelationInput | DiaDisciplinaMateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiaDisciplinaMateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaDisciplinaMaterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaDisciplinaMaterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiaDisciplinaMaterias
    **/
    _count?: true | DiaDisciplinaMateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiaDisciplinaMateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiaDisciplinaMateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiaDisciplinaMateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiaDisciplinaMateriaMaxAggregateInputType
  }

  export type GetDiaDisciplinaMateriaAggregateType<T extends DiaDisciplinaMateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateDiaDisciplinaMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiaDisciplinaMateria[P]>
      : GetScalarType<T[P], AggregateDiaDisciplinaMateria[P]>
  }




  export type DiaDisciplinaMateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaDisciplinaMateriaWhereInput
    orderBy?: DiaDisciplinaMateriaOrderByWithAggregationInput | DiaDisciplinaMateriaOrderByWithAggregationInput[]
    by: DiaDisciplinaMateriaScalarFieldEnum[] | DiaDisciplinaMateriaScalarFieldEnum
    having?: DiaDisciplinaMateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiaDisciplinaMateriaCountAggregateInputType | true
    _avg?: DiaDisciplinaMateriaAvgAggregateInputType
    _sum?: DiaDisciplinaMateriaSumAggregateInputType
    _min?: DiaDisciplinaMateriaMinAggregateInputType
    _max?: DiaDisciplinaMateriaMaxAggregateInputType
  }

  export type DiaDisciplinaMateriaGroupByOutputType = {
    id: string
    userId: string
    dia: $Enums.DiaDaSemana
    materiaId: string
    planoId: string | null
    status: $Enums.StatusConteudo
    tempoEstudado: number | null
    anotacoes: string | null
    progresso: number
    criadoEm: Date
    atualizadoEm: Date
    _count: DiaDisciplinaMateriaCountAggregateOutputType | null
    _avg: DiaDisciplinaMateriaAvgAggregateOutputType | null
    _sum: DiaDisciplinaMateriaSumAggregateOutputType | null
    _min: DiaDisciplinaMateriaMinAggregateOutputType | null
    _max: DiaDisciplinaMateriaMaxAggregateOutputType | null
  }

  type GetDiaDisciplinaMateriaGroupByPayload<T extends DiaDisciplinaMateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiaDisciplinaMateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiaDisciplinaMateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiaDisciplinaMateriaGroupByOutputType[P]>
            : GetScalarType<T[P], DiaDisciplinaMateriaGroupByOutputType[P]>
        }
      >
    >


  export type DiaDisciplinaMateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dia?: boolean
    materiaId?: boolean
    planoId?: boolean
    status?: boolean
    tempoEstudado?: boolean
    anotacoes?: boolean
    progresso?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    plano?: boolean | DiaDisciplinaMateria$planoArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaDisciplinaMateria"]>

  export type DiaDisciplinaMateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dia?: boolean
    materiaId?: boolean
    planoId?: boolean
    status?: boolean
    tempoEstudado?: boolean
    anotacoes?: boolean
    progresso?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    plano?: boolean | DiaDisciplinaMateria$planoArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaDisciplinaMateria"]>

  export type DiaDisciplinaMateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dia?: boolean
    materiaId?: boolean
    planoId?: boolean
    status?: boolean
    tempoEstudado?: boolean
    anotacoes?: boolean
    progresso?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    plano?: boolean | DiaDisciplinaMateria$planoArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaDisciplinaMateria"]>

  export type DiaDisciplinaMateriaSelectScalar = {
    id?: boolean
    userId?: boolean
    dia?: boolean
    materiaId?: boolean
    planoId?: boolean
    status?: boolean
    tempoEstudado?: boolean
    anotacoes?: boolean
    progresso?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type DiaDisciplinaMateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dia" | "materiaId" | "planoId" | "status" | "tempoEstudado" | "anotacoes" | "progresso" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["diaDisciplinaMateria"]>
  export type DiaDisciplinaMateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    plano?: boolean | DiaDisciplinaMateria$planoArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiaDisciplinaMateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    plano?: boolean | DiaDisciplinaMateria$planoArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiaDisciplinaMateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    plano?: boolean | DiaDisciplinaMateria$planoArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DiaDisciplinaMateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiaDisciplinaMateria"
    objects: {
      materia: Prisma.$MateriaPayload<ExtArgs>
      plano: Prisma.$PlanoDeEstudosPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dia: $Enums.DiaDaSemana
      materiaId: string
      planoId: string | null
      status: $Enums.StatusConteudo
      tempoEstudado: number | null
      anotacoes: string | null
      progresso: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["diaDisciplinaMateria"]>
    composites: {}
  }

  type DiaDisciplinaMateriaGetPayload<S extends boolean | null | undefined | DiaDisciplinaMateriaDefaultArgs> = $Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload, S>

  type DiaDisciplinaMateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiaDisciplinaMateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiaDisciplinaMateriaCountAggregateInputType | true
    }

  export interface DiaDisciplinaMateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiaDisciplinaMateria'], meta: { name: 'DiaDisciplinaMateria' } }
    /**
     * Find zero or one DiaDisciplinaMateria that matches the filter.
     * @param {DiaDisciplinaMateriaFindUniqueArgs} args - Arguments to find a DiaDisciplinaMateria
     * @example
     * // Get one DiaDisciplinaMateria
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiaDisciplinaMateriaFindUniqueArgs>(args: SelectSubset<T, DiaDisciplinaMateriaFindUniqueArgs<ExtArgs>>): Prisma__DiaDisciplinaMateriaClient<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiaDisciplinaMateria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiaDisciplinaMateriaFindUniqueOrThrowArgs} args - Arguments to find a DiaDisciplinaMateria
     * @example
     * // Get one DiaDisciplinaMateria
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiaDisciplinaMateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, DiaDisciplinaMateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiaDisciplinaMateriaClient<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaDisciplinaMateria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaDisciplinaMateriaFindFirstArgs} args - Arguments to find a DiaDisciplinaMateria
     * @example
     * // Get one DiaDisciplinaMateria
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiaDisciplinaMateriaFindFirstArgs>(args?: SelectSubset<T, DiaDisciplinaMateriaFindFirstArgs<ExtArgs>>): Prisma__DiaDisciplinaMateriaClient<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaDisciplinaMateria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaDisciplinaMateriaFindFirstOrThrowArgs} args - Arguments to find a DiaDisciplinaMateria
     * @example
     * // Get one DiaDisciplinaMateria
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiaDisciplinaMateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, DiaDisciplinaMateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiaDisciplinaMateriaClient<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiaDisciplinaMaterias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaDisciplinaMateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiaDisciplinaMaterias
     * const diaDisciplinaMaterias = await prisma.diaDisciplinaMateria.findMany()
     * 
     * // Get first 10 DiaDisciplinaMaterias
     * const diaDisciplinaMaterias = await prisma.diaDisciplinaMateria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diaDisciplinaMateriaWithIdOnly = await prisma.diaDisciplinaMateria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiaDisciplinaMateriaFindManyArgs>(args?: SelectSubset<T, DiaDisciplinaMateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiaDisciplinaMateria.
     * @param {DiaDisciplinaMateriaCreateArgs} args - Arguments to create a DiaDisciplinaMateria.
     * @example
     * // Create one DiaDisciplinaMateria
     * const DiaDisciplinaMateria = await prisma.diaDisciplinaMateria.create({
     *   data: {
     *     // ... data to create a DiaDisciplinaMateria
     *   }
     * })
     * 
     */
    create<T extends DiaDisciplinaMateriaCreateArgs>(args: SelectSubset<T, DiaDisciplinaMateriaCreateArgs<ExtArgs>>): Prisma__DiaDisciplinaMateriaClient<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiaDisciplinaMaterias.
     * @param {DiaDisciplinaMateriaCreateManyArgs} args - Arguments to create many DiaDisciplinaMaterias.
     * @example
     * // Create many DiaDisciplinaMaterias
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiaDisciplinaMateriaCreateManyArgs>(args?: SelectSubset<T, DiaDisciplinaMateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiaDisciplinaMaterias and returns the data saved in the database.
     * @param {DiaDisciplinaMateriaCreateManyAndReturnArgs} args - Arguments to create many DiaDisciplinaMaterias.
     * @example
     * // Create many DiaDisciplinaMaterias
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiaDisciplinaMaterias and only return the `id`
     * const diaDisciplinaMateriaWithIdOnly = await prisma.diaDisciplinaMateria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiaDisciplinaMateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, DiaDisciplinaMateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiaDisciplinaMateria.
     * @param {DiaDisciplinaMateriaDeleteArgs} args - Arguments to delete one DiaDisciplinaMateria.
     * @example
     * // Delete one DiaDisciplinaMateria
     * const DiaDisciplinaMateria = await prisma.diaDisciplinaMateria.delete({
     *   where: {
     *     // ... filter to delete one DiaDisciplinaMateria
     *   }
     * })
     * 
     */
    delete<T extends DiaDisciplinaMateriaDeleteArgs>(args: SelectSubset<T, DiaDisciplinaMateriaDeleteArgs<ExtArgs>>): Prisma__DiaDisciplinaMateriaClient<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiaDisciplinaMateria.
     * @param {DiaDisciplinaMateriaUpdateArgs} args - Arguments to update one DiaDisciplinaMateria.
     * @example
     * // Update one DiaDisciplinaMateria
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiaDisciplinaMateriaUpdateArgs>(args: SelectSubset<T, DiaDisciplinaMateriaUpdateArgs<ExtArgs>>): Prisma__DiaDisciplinaMateriaClient<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiaDisciplinaMaterias.
     * @param {DiaDisciplinaMateriaDeleteManyArgs} args - Arguments to filter DiaDisciplinaMaterias to delete.
     * @example
     * // Delete a few DiaDisciplinaMaterias
     * const { count } = await prisma.diaDisciplinaMateria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiaDisciplinaMateriaDeleteManyArgs>(args?: SelectSubset<T, DiaDisciplinaMateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaDisciplinaMaterias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaDisciplinaMateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiaDisciplinaMaterias
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiaDisciplinaMateriaUpdateManyArgs>(args: SelectSubset<T, DiaDisciplinaMateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaDisciplinaMaterias and returns the data updated in the database.
     * @param {DiaDisciplinaMateriaUpdateManyAndReturnArgs} args - Arguments to update many DiaDisciplinaMaterias.
     * @example
     * // Update many DiaDisciplinaMaterias
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiaDisciplinaMaterias and only return the `id`
     * const diaDisciplinaMateriaWithIdOnly = await prisma.diaDisciplinaMateria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiaDisciplinaMateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, DiaDisciplinaMateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiaDisciplinaMateria.
     * @param {DiaDisciplinaMateriaUpsertArgs} args - Arguments to update or create a DiaDisciplinaMateria.
     * @example
     * // Update or create a DiaDisciplinaMateria
     * const diaDisciplinaMateria = await prisma.diaDisciplinaMateria.upsert({
     *   create: {
     *     // ... data to create a DiaDisciplinaMateria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiaDisciplinaMateria we want to update
     *   }
     * })
     */
    upsert<T extends DiaDisciplinaMateriaUpsertArgs>(args: SelectSubset<T, DiaDisciplinaMateriaUpsertArgs<ExtArgs>>): Prisma__DiaDisciplinaMateriaClient<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiaDisciplinaMaterias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaDisciplinaMateriaCountArgs} args - Arguments to filter DiaDisciplinaMaterias to count.
     * @example
     * // Count the number of DiaDisciplinaMaterias
     * const count = await prisma.diaDisciplinaMateria.count({
     *   where: {
     *     // ... the filter for the DiaDisciplinaMaterias we want to count
     *   }
     * })
    **/
    count<T extends DiaDisciplinaMateriaCountArgs>(
      args?: Subset<T, DiaDisciplinaMateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiaDisciplinaMateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiaDisciplinaMateria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaDisciplinaMateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiaDisciplinaMateriaAggregateArgs>(args: Subset<T, DiaDisciplinaMateriaAggregateArgs>): Prisma.PrismaPromise<GetDiaDisciplinaMateriaAggregateType<T>>

    /**
     * Group by DiaDisciplinaMateria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaDisciplinaMateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiaDisciplinaMateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiaDisciplinaMateriaGroupByArgs['orderBy'] }
        : { orderBy?: DiaDisciplinaMateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiaDisciplinaMateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiaDisciplinaMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiaDisciplinaMateria model
   */
  readonly fields: DiaDisciplinaMateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiaDisciplinaMateria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiaDisciplinaMateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plano<T extends DiaDisciplinaMateria$planoArgs<ExtArgs> = {}>(args?: Subset<T, DiaDisciplinaMateria$planoArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiaDisciplinaMateria model
   */
  interface DiaDisciplinaMateriaFieldRefs {
    readonly id: FieldRef<"DiaDisciplinaMateria", 'String'>
    readonly userId: FieldRef<"DiaDisciplinaMateria", 'String'>
    readonly dia: FieldRef<"DiaDisciplinaMateria", 'DiaDaSemana'>
    readonly materiaId: FieldRef<"DiaDisciplinaMateria", 'String'>
    readonly planoId: FieldRef<"DiaDisciplinaMateria", 'String'>
    readonly status: FieldRef<"DiaDisciplinaMateria", 'StatusConteudo'>
    readonly tempoEstudado: FieldRef<"DiaDisciplinaMateria", 'Int'>
    readonly anotacoes: FieldRef<"DiaDisciplinaMateria", 'String'>
    readonly progresso: FieldRef<"DiaDisciplinaMateria", 'Int'>
    readonly criadoEm: FieldRef<"DiaDisciplinaMateria", 'DateTime'>
    readonly atualizadoEm: FieldRef<"DiaDisciplinaMateria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiaDisciplinaMateria findUnique
   */
  export type DiaDisciplinaMateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * Filter, which DiaDisciplinaMateria to fetch.
     */
    where: DiaDisciplinaMateriaWhereUniqueInput
  }

  /**
   * DiaDisciplinaMateria findUniqueOrThrow
   */
  export type DiaDisciplinaMateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * Filter, which DiaDisciplinaMateria to fetch.
     */
    where: DiaDisciplinaMateriaWhereUniqueInput
  }

  /**
   * DiaDisciplinaMateria findFirst
   */
  export type DiaDisciplinaMateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * Filter, which DiaDisciplinaMateria to fetch.
     */
    where?: DiaDisciplinaMateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaDisciplinaMaterias to fetch.
     */
    orderBy?: DiaDisciplinaMateriaOrderByWithRelationInput | DiaDisciplinaMateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaDisciplinaMaterias.
     */
    cursor?: DiaDisciplinaMateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaDisciplinaMaterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaDisciplinaMaterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaDisciplinaMaterias.
     */
    distinct?: DiaDisciplinaMateriaScalarFieldEnum | DiaDisciplinaMateriaScalarFieldEnum[]
  }

  /**
   * DiaDisciplinaMateria findFirstOrThrow
   */
  export type DiaDisciplinaMateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * Filter, which DiaDisciplinaMateria to fetch.
     */
    where?: DiaDisciplinaMateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaDisciplinaMaterias to fetch.
     */
    orderBy?: DiaDisciplinaMateriaOrderByWithRelationInput | DiaDisciplinaMateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaDisciplinaMaterias.
     */
    cursor?: DiaDisciplinaMateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaDisciplinaMaterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaDisciplinaMaterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaDisciplinaMaterias.
     */
    distinct?: DiaDisciplinaMateriaScalarFieldEnum | DiaDisciplinaMateriaScalarFieldEnum[]
  }

  /**
   * DiaDisciplinaMateria findMany
   */
  export type DiaDisciplinaMateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * Filter, which DiaDisciplinaMaterias to fetch.
     */
    where?: DiaDisciplinaMateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaDisciplinaMaterias to fetch.
     */
    orderBy?: DiaDisciplinaMateriaOrderByWithRelationInput | DiaDisciplinaMateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiaDisciplinaMaterias.
     */
    cursor?: DiaDisciplinaMateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaDisciplinaMaterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaDisciplinaMaterias.
     */
    skip?: number
    distinct?: DiaDisciplinaMateriaScalarFieldEnum | DiaDisciplinaMateriaScalarFieldEnum[]
  }

  /**
   * DiaDisciplinaMateria create
   */
  export type DiaDisciplinaMateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a DiaDisciplinaMateria.
     */
    data: XOR<DiaDisciplinaMateriaCreateInput, DiaDisciplinaMateriaUncheckedCreateInput>
  }

  /**
   * DiaDisciplinaMateria createMany
   */
  export type DiaDisciplinaMateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiaDisciplinaMaterias.
     */
    data: DiaDisciplinaMateriaCreateManyInput | DiaDisciplinaMateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaDisciplinaMateria createManyAndReturn
   */
  export type DiaDisciplinaMateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * The data used to create many DiaDisciplinaMaterias.
     */
    data: DiaDisciplinaMateriaCreateManyInput | DiaDisciplinaMateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiaDisciplinaMateria update
   */
  export type DiaDisciplinaMateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a DiaDisciplinaMateria.
     */
    data: XOR<DiaDisciplinaMateriaUpdateInput, DiaDisciplinaMateriaUncheckedUpdateInput>
    /**
     * Choose, which DiaDisciplinaMateria to update.
     */
    where: DiaDisciplinaMateriaWhereUniqueInput
  }

  /**
   * DiaDisciplinaMateria updateMany
   */
  export type DiaDisciplinaMateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiaDisciplinaMaterias.
     */
    data: XOR<DiaDisciplinaMateriaUpdateManyMutationInput, DiaDisciplinaMateriaUncheckedUpdateManyInput>
    /**
     * Filter which DiaDisciplinaMaterias to update
     */
    where?: DiaDisciplinaMateriaWhereInput
    /**
     * Limit how many DiaDisciplinaMaterias to update.
     */
    limit?: number
  }

  /**
   * DiaDisciplinaMateria updateManyAndReturn
   */
  export type DiaDisciplinaMateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * The data used to update DiaDisciplinaMaterias.
     */
    data: XOR<DiaDisciplinaMateriaUpdateManyMutationInput, DiaDisciplinaMateriaUncheckedUpdateManyInput>
    /**
     * Filter which DiaDisciplinaMaterias to update
     */
    where?: DiaDisciplinaMateriaWhereInput
    /**
     * Limit how many DiaDisciplinaMaterias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiaDisciplinaMateria upsert
   */
  export type DiaDisciplinaMateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the DiaDisciplinaMateria to update in case it exists.
     */
    where: DiaDisciplinaMateriaWhereUniqueInput
    /**
     * In case the DiaDisciplinaMateria found by the `where` argument doesn't exist, create a new DiaDisciplinaMateria with this data.
     */
    create: XOR<DiaDisciplinaMateriaCreateInput, DiaDisciplinaMateriaUncheckedCreateInput>
    /**
     * In case the DiaDisciplinaMateria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiaDisciplinaMateriaUpdateInput, DiaDisciplinaMateriaUncheckedUpdateInput>
  }

  /**
   * DiaDisciplinaMateria delete
   */
  export type DiaDisciplinaMateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    /**
     * Filter which DiaDisciplinaMateria to delete.
     */
    where: DiaDisciplinaMateriaWhereUniqueInput
  }

  /**
   * DiaDisciplinaMateria deleteMany
   */
  export type DiaDisciplinaMateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaDisciplinaMaterias to delete
     */
    where?: DiaDisciplinaMateriaWhereInput
    /**
     * Limit how many DiaDisciplinaMaterias to delete.
     */
    limit?: number
  }

  /**
   * DiaDisciplinaMateria.plano
   */
  export type DiaDisciplinaMateria$planoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    where?: PlanoDeEstudosWhereInput
  }

  /**
   * DiaDisciplinaMateria without action
   */
  export type DiaDisciplinaMateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
  }


  /**
   * Model PlanoDeEstudos
   */

  export type AggregatePlanoDeEstudos = {
    _count: PlanoDeEstudosCountAggregateOutputType | null
    _avg: PlanoDeEstudosAvgAggregateOutputType | null
    _sum: PlanoDeEstudosSumAggregateOutputType | null
    _min: PlanoDeEstudosMinAggregateOutputType | null
    _max: PlanoDeEstudosMaxAggregateOutputType | null
  }

  export type PlanoDeEstudosAvgAggregateOutputType = {
    progressoGeral: number | null
  }

  export type PlanoDeEstudosSumAggregateOutputType = {
    progressoGeral: number | null
  }

  export type PlanoDeEstudosMinAggregateOutputType = {
    id: string | null
    userId: string | null
    titulo: string | null
    dataInicio: Date | null
    dataFim: Date | null
    ativo: boolean | null
    progressoGeral: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PlanoDeEstudosMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    titulo: string | null
    dataInicio: Date | null
    dataFim: Date | null
    ativo: boolean | null
    progressoGeral: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PlanoDeEstudosCountAggregateOutputType = {
    id: number
    userId: number
    titulo: number
    dataInicio: number
    dataFim: number
    ativo: number
    progressoGeral: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type PlanoDeEstudosAvgAggregateInputType = {
    progressoGeral?: true
  }

  export type PlanoDeEstudosSumAggregateInputType = {
    progressoGeral?: true
  }

  export type PlanoDeEstudosMinAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    progressoGeral?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PlanoDeEstudosMaxAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    progressoGeral?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PlanoDeEstudosCountAggregateInputType = {
    id?: true
    userId?: true
    titulo?: true
    dataInicio?: true
    dataFim?: true
    ativo?: true
    progressoGeral?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type PlanoDeEstudosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanoDeEstudos to aggregate.
     */
    where?: PlanoDeEstudosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanoDeEstudos to fetch.
     */
    orderBy?: PlanoDeEstudosOrderByWithRelationInput | PlanoDeEstudosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanoDeEstudosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanoDeEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanoDeEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanoDeEstudos
    **/
    _count?: true | PlanoDeEstudosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanoDeEstudosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanoDeEstudosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanoDeEstudosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanoDeEstudosMaxAggregateInputType
  }

  export type GetPlanoDeEstudosAggregateType<T extends PlanoDeEstudosAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanoDeEstudos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanoDeEstudos[P]>
      : GetScalarType<T[P], AggregatePlanoDeEstudos[P]>
  }




  export type PlanoDeEstudosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanoDeEstudosWhereInput
    orderBy?: PlanoDeEstudosOrderByWithAggregationInput | PlanoDeEstudosOrderByWithAggregationInput[]
    by: PlanoDeEstudosScalarFieldEnum[] | PlanoDeEstudosScalarFieldEnum
    having?: PlanoDeEstudosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanoDeEstudosCountAggregateInputType | true
    _avg?: PlanoDeEstudosAvgAggregateInputType
    _sum?: PlanoDeEstudosSumAggregateInputType
    _min?: PlanoDeEstudosMinAggregateInputType
    _max?: PlanoDeEstudosMaxAggregateInputType
  }

  export type PlanoDeEstudosGroupByOutputType = {
    id: string
    userId: string
    titulo: string
    dataInicio: Date
    dataFim: Date | null
    ativo: boolean
    progressoGeral: number
    criadoEm: Date
    atualizadoEm: Date
    _count: PlanoDeEstudosCountAggregateOutputType | null
    _avg: PlanoDeEstudosAvgAggregateOutputType | null
    _sum: PlanoDeEstudosSumAggregateOutputType | null
    _min: PlanoDeEstudosMinAggregateOutputType | null
    _max: PlanoDeEstudosMaxAggregateOutputType | null
  }

  type GetPlanoDeEstudosGroupByPayload<T extends PlanoDeEstudosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanoDeEstudosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanoDeEstudosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanoDeEstudosGroupByOutputType[P]>
            : GetScalarType<T[P], PlanoDeEstudosGroupByOutputType[P]>
        }
      >
    >


  export type PlanoDeEstudosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    titulo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    progressoGeral?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    registros?: boolean | PlanoDeEstudos$registrosArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlanoDeEstudosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planoDeEstudos"]>

  export type PlanoDeEstudosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    titulo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    progressoGeral?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planoDeEstudos"]>

  export type PlanoDeEstudosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    titulo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    progressoGeral?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planoDeEstudos"]>

  export type PlanoDeEstudosSelectScalar = {
    id?: boolean
    userId?: boolean
    titulo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    ativo?: boolean
    progressoGeral?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type PlanoDeEstudosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "titulo" | "dataInicio" | "dataFim" | "ativo" | "progressoGeral" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["planoDeEstudos"]>
  export type PlanoDeEstudosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | PlanoDeEstudos$registrosArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlanoDeEstudosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanoDeEstudosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlanoDeEstudosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlanoDeEstudosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanoDeEstudos"
    objects: {
      registros: Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      titulo: string
      dataInicio: Date
      dataFim: Date | null
      ativo: boolean
      progressoGeral: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["planoDeEstudos"]>
    composites: {}
  }

  type PlanoDeEstudosGetPayload<S extends boolean | null | undefined | PlanoDeEstudosDefaultArgs> = $Result.GetResult<Prisma.$PlanoDeEstudosPayload, S>

  type PlanoDeEstudosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanoDeEstudosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanoDeEstudosCountAggregateInputType | true
    }

  export interface PlanoDeEstudosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanoDeEstudos'], meta: { name: 'PlanoDeEstudos' } }
    /**
     * Find zero or one PlanoDeEstudos that matches the filter.
     * @param {PlanoDeEstudosFindUniqueArgs} args - Arguments to find a PlanoDeEstudos
     * @example
     * // Get one PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanoDeEstudosFindUniqueArgs>(args: SelectSubset<T, PlanoDeEstudosFindUniqueArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanoDeEstudos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanoDeEstudosFindUniqueOrThrowArgs} args - Arguments to find a PlanoDeEstudos
     * @example
     * // Get one PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanoDeEstudosFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanoDeEstudosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanoDeEstudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoDeEstudosFindFirstArgs} args - Arguments to find a PlanoDeEstudos
     * @example
     * // Get one PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanoDeEstudosFindFirstArgs>(args?: SelectSubset<T, PlanoDeEstudosFindFirstArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanoDeEstudos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoDeEstudosFindFirstOrThrowArgs} args - Arguments to find a PlanoDeEstudos
     * @example
     * // Get one PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanoDeEstudosFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanoDeEstudosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanoDeEstudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoDeEstudosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.findMany()
     * 
     * // Get first 10 PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planoDeEstudosWithIdOnly = await prisma.planoDeEstudos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanoDeEstudosFindManyArgs>(args?: SelectSubset<T, PlanoDeEstudosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanoDeEstudos.
     * @param {PlanoDeEstudosCreateArgs} args - Arguments to create a PlanoDeEstudos.
     * @example
     * // Create one PlanoDeEstudos
     * const PlanoDeEstudos = await prisma.planoDeEstudos.create({
     *   data: {
     *     // ... data to create a PlanoDeEstudos
     *   }
     * })
     * 
     */
    create<T extends PlanoDeEstudosCreateArgs>(args: SelectSubset<T, PlanoDeEstudosCreateArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanoDeEstudos.
     * @param {PlanoDeEstudosCreateManyArgs} args - Arguments to create many PlanoDeEstudos.
     * @example
     * // Create many PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanoDeEstudosCreateManyArgs>(args?: SelectSubset<T, PlanoDeEstudosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanoDeEstudos and returns the data saved in the database.
     * @param {PlanoDeEstudosCreateManyAndReturnArgs} args - Arguments to create many PlanoDeEstudos.
     * @example
     * // Create many PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanoDeEstudos and only return the `id`
     * const planoDeEstudosWithIdOnly = await prisma.planoDeEstudos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanoDeEstudosCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanoDeEstudosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanoDeEstudos.
     * @param {PlanoDeEstudosDeleteArgs} args - Arguments to delete one PlanoDeEstudos.
     * @example
     * // Delete one PlanoDeEstudos
     * const PlanoDeEstudos = await prisma.planoDeEstudos.delete({
     *   where: {
     *     // ... filter to delete one PlanoDeEstudos
     *   }
     * })
     * 
     */
    delete<T extends PlanoDeEstudosDeleteArgs>(args: SelectSubset<T, PlanoDeEstudosDeleteArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanoDeEstudos.
     * @param {PlanoDeEstudosUpdateArgs} args - Arguments to update one PlanoDeEstudos.
     * @example
     * // Update one PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanoDeEstudosUpdateArgs>(args: SelectSubset<T, PlanoDeEstudosUpdateArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanoDeEstudos.
     * @param {PlanoDeEstudosDeleteManyArgs} args - Arguments to filter PlanoDeEstudos to delete.
     * @example
     * // Delete a few PlanoDeEstudos
     * const { count } = await prisma.planoDeEstudos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanoDeEstudosDeleteManyArgs>(args?: SelectSubset<T, PlanoDeEstudosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanoDeEstudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoDeEstudosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanoDeEstudosUpdateManyArgs>(args: SelectSubset<T, PlanoDeEstudosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanoDeEstudos and returns the data updated in the database.
     * @param {PlanoDeEstudosUpdateManyAndReturnArgs} args - Arguments to update many PlanoDeEstudos.
     * @example
     * // Update many PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanoDeEstudos and only return the `id`
     * const planoDeEstudosWithIdOnly = await prisma.planoDeEstudos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanoDeEstudosUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanoDeEstudosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanoDeEstudos.
     * @param {PlanoDeEstudosUpsertArgs} args - Arguments to update or create a PlanoDeEstudos.
     * @example
     * // Update or create a PlanoDeEstudos
     * const planoDeEstudos = await prisma.planoDeEstudos.upsert({
     *   create: {
     *     // ... data to create a PlanoDeEstudos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanoDeEstudos we want to update
     *   }
     * })
     */
    upsert<T extends PlanoDeEstudosUpsertArgs>(args: SelectSubset<T, PlanoDeEstudosUpsertArgs<ExtArgs>>): Prisma__PlanoDeEstudosClient<$Result.GetResult<Prisma.$PlanoDeEstudosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanoDeEstudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoDeEstudosCountArgs} args - Arguments to filter PlanoDeEstudos to count.
     * @example
     * // Count the number of PlanoDeEstudos
     * const count = await prisma.planoDeEstudos.count({
     *   where: {
     *     // ... the filter for the PlanoDeEstudos we want to count
     *   }
     * })
    **/
    count<T extends PlanoDeEstudosCountArgs>(
      args?: Subset<T, PlanoDeEstudosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanoDeEstudosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanoDeEstudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoDeEstudosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanoDeEstudosAggregateArgs>(args: Subset<T, PlanoDeEstudosAggregateArgs>): Prisma.PrismaPromise<GetPlanoDeEstudosAggregateType<T>>

    /**
     * Group by PlanoDeEstudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanoDeEstudosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanoDeEstudosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanoDeEstudosGroupByArgs['orderBy'] }
        : { orderBy?: PlanoDeEstudosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanoDeEstudosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanoDeEstudosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanoDeEstudos model
   */
  readonly fields: PlanoDeEstudosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanoDeEstudos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanoDeEstudosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registros<T extends PlanoDeEstudos$registrosArgs<ExtArgs> = {}>(args?: Subset<T, PlanoDeEstudos$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaDisciplinaMateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlanoDeEstudos model
   */
  interface PlanoDeEstudosFieldRefs {
    readonly id: FieldRef<"PlanoDeEstudos", 'String'>
    readonly userId: FieldRef<"PlanoDeEstudos", 'String'>
    readonly titulo: FieldRef<"PlanoDeEstudos", 'String'>
    readonly dataInicio: FieldRef<"PlanoDeEstudos", 'DateTime'>
    readonly dataFim: FieldRef<"PlanoDeEstudos", 'DateTime'>
    readonly ativo: FieldRef<"PlanoDeEstudos", 'Boolean'>
    readonly progressoGeral: FieldRef<"PlanoDeEstudos", 'Int'>
    readonly criadoEm: FieldRef<"PlanoDeEstudos", 'DateTime'>
    readonly atualizadoEm: FieldRef<"PlanoDeEstudos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlanoDeEstudos findUnique
   */
  export type PlanoDeEstudosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * Filter, which PlanoDeEstudos to fetch.
     */
    where: PlanoDeEstudosWhereUniqueInput
  }

  /**
   * PlanoDeEstudos findUniqueOrThrow
   */
  export type PlanoDeEstudosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * Filter, which PlanoDeEstudos to fetch.
     */
    where: PlanoDeEstudosWhereUniqueInput
  }

  /**
   * PlanoDeEstudos findFirst
   */
  export type PlanoDeEstudosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * Filter, which PlanoDeEstudos to fetch.
     */
    where?: PlanoDeEstudosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanoDeEstudos to fetch.
     */
    orderBy?: PlanoDeEstudosOrderByWithRelationInput | PlanoDeEstudosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanoDeEstudos.
     */
    cursor?: PlanoDeEstudosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanoDeEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanoDeEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanoDeEstudos.
     */
    distinct?: PlanoDeEstudosScalarFieldEnum | PlanoDeEstudosScalarFieldEnum[]
  }

  /**
   * PlanoDeEstudos findFirstOrThrow
   */
  export type PlanoDeEstudosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * Filter, which PlanoDeEstudos to fetch.
     */
    where?: PlanoDeEstudosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanoDeEstudos to fetch.
     */
    orderBy?: PlanoDeEstudosOrderByWithRelationInput | PlanoDeEstudosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanoDeEstudos.
     */
    cursor?: PlanoDeEstudosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanoDeEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanoDeEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanoDeEstudos.
     */
    distinct?: PlanoDeEstudosScalarFieldEnum | PlanoDeEstudosScalarFieldEnum[]
  }

  /**
   * PlanoDeEstudos findMany
   */
  export type PlanoDeEstudosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * Filter, which PlanoDeEstudos to fetch.
     */
    where?: PlanoDeEstudosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanoDeEstudos to fetch.
     */
    orderBy?: PlanoDeEstudosOrderByWithRelationInput | PlanoDeEstudosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanoDeEstudos.
     */
    cursor?: PlanoDeEstudosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanoDeEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanoDeEstudos.
     */
    skip?: number
    distinct?: PlanoDeEstudosScalarFieldEnum | PlanoDeEstudosScalarFieldEnum[]
  }

  /**
   * PlanoDeEstudos create
   */
  export type PlanoDeEstudosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanoDeEstudos.
     */
    data: XOR<PlanoDeEstudosCreateInput, PlanoDeEstudosUncheckedCreateInput>
  }

  /**
   * PlanoDeEstudos createMany
   */
  export type PlanoDeEstudosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanoDeEstudos.
     */
    data: PlanoDeEstudosCreateManyInput | PlanoDeEstudosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanoDeEstudos createManyAndReturn
   */
  export type PlanoDeEstudosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * The data used to create many PlanoDeEstudos.
     */
    data: PlanoDeEstudosCreateManyInput | PlanoDeEstudosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanoDeEstudos update
   */
  export type PlanoDeEstudosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanoDeEstudos.
     */
    data: XOR<PlanoDeEstudosUpdateInput, PlanoDeEstudosUncheckedUpdateInput>
    /**
     * Choose, which PlanoDeEstudos to update.
     */
    where: PlanoDeEstudosWhereUniqueInput
  }

  /**
   * PlanoDeEstudos updateMany
   */
  export type PlanoDeEstudosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanoDeEstudos.
     */
    data: XOR<PlanoDeEstudosUpdateManyMutationInput, PlanoDeEstudosUncheckedUpdateManyInput>
    /**
     * Filter which PlanoDeEstudos to update
     */
    where?: PlanoDeEstudosWhereInput
    /**
     * Limit how many PlanoDeEstudos to update.
     */
    limit?: number
  }

  /**
   * PlanoDeEstudos updateManyAndReturn
   */
  export type PlanoDeEstudosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * The data used to update PlanoDeEstudos.
     */
    data: XOR<PlanoDeEstudosUpdateManyMutationInput, PlanoDeEstudosUncheckedUpdateManyInput>
    /**
     * Filter which PlanoDeEstudos to update
     */
    where?: PlanoDeEstudosWhereInput
    /**
     * Limit how many PlanoDeEstudos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanoDeEstudos upsert
   */
  export type PlanoDeEstudosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanoDeEstudos to update in case it exists.
     */
    where: PlanoDeEstudosWhereUniqueInput
    /**
     * In case the PlanoDeEstudos found by the `where` argument doesn't exist, create a new PlanoDeEstudos with this data.
     */
    create: XOR<PlanoDeEstudosCreateInput, PlanoDeEstudosUncheckedCreateInput>
    /**
     * In case the PlanoDeEstudos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanoDeEstudosUpdateInput, PlanoDeEstudosUncheckedUpdateInput>
  }

  /**
   * PlanoDeEstudos delete
   */
  export type PlanoDeEstudosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
    /**
     * Filter which PlanoDeEstudos to delete.
     */
    where: PlanoDeEstudosWhereUniqueInput
  }

  /**
   * PlanoDeEstudos deleteMany
   */
  export type PlanoDeEstudosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanoDeEstudos to delete
     */
    where?: PlanoDeEstudosWhereInput
    /**
     * Limit how many PlanoDeEstudos to delete.
     */
    limit?: number
  }

  /**
   * PlanoDeEstudos.registros
   */
  export type PlanoDeEstudos$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaDisciplinaMateria
     */
    select?: DiaDisciplinaMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaDisciplinaMateria
     */
    omit?: DiaDisciplinaMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaDisciplinaMateriaInclude<ExtArgs> | null
    where?: DiaDisciplinaMateriaWhereInput
    orderBy?: DiaDisciplinaMateriaOrderByWithRelationInput | DiaDisciplinaMateriaOrderByWithRelationInput[]
    cursor?: DiaDisciplinaMateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiaDisciplinaMateriaScalarFieldEnum | DiaDisciplinaMateriaScalarFieldEnum[]
  }

  /**
   * PlanoDeEstudos without action
   */
  export type PlanoDeEstudosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanoDeEstudos
     */
    select?: PlanoDeEstudosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanoDeEstudos
     */
    omit?: PlanoDeEstudosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanoDeEstudosInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoEstudo
   */

  export type AggregateHistoricoEstudo = {
    _count: HistoricoEstudoCountAggregateOutputType | null
    _avg: HistoricoEstudoAvgAggregateOutputType | null
    _sum: HistoricoEstudoSumAggregateOutputType | null
    _min: HistoricoEstudoMinAggregateOutputType | null
    _max: HistoricoEstudoMaxAggregateOutputType | null
  }

  export type HistoricoEstudoAvgAggregateOutputType = {
    tempoEstudado: number | null
    progresso: number | null
  }

  export type HistoricoEstudoSumAggregateOutputType = {
    tempoEstudado: number | null
    progresso: number | null
  }

  export type HistoricoEstudoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tituloDaMateria: string | null
    disciplina: $Enums.DisciplinaNome | null
    dataEstudo: Date | null
    tempoEstudado: number | null
    anotacoes: string | null
    progresso: number | null
    planoId: string | null
    criadoEm: Date | null
  }

  export type HistoricoEstudoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tituloDaMateria: string | null
    disciplina: $Enums.DisciplinaNome | null
    dataEstudo: Date | null
    tempoEstudado: number | null
    anotacoes: string | null
    progresso: number | null
    planoId: string | null
    criadoEm: Date | null
  }

  export type HistoricoEstudoCountAggregateOutputType = {
    id: number
    userId: number
    tituloDaMateria: number
    disciplina: number
    dataEstudo: number
    tempoEstudado: number
    anotacoes: number
    progresso: number
    planoId: number
    criadoEm: number
    _all: number
  }


  export type HistoricoEstudoAvgAggregateInputType = {
    tempoEstudado?: true
    progresso?: true
  }

  export type HistoricoEstudoSumAggregateInputType = {
    tempoEstudado?: true
    progresso?: true
  }

  export type HistoricoEstudoMinAggregateInputType = {
    id?: true
    userId?: true
    tituloDaMateria?: true
    disciplina?: true
    dataEstudo?: true
    tempoEstudado?: true
    anotacoes?: true
    progresso?: true
    planoId?: true
    criadoEm?: true
  }

  export type HistoricoEstudoMaxAggregateInputType = {
    id?: true
    userId?: true
    tituloDaMateria?: true
    disciplina?: true
    dataEstudo?: true
    tempoEstudado?: true
    anotacoes?: true
    progresso?: true
    planoId?: true
    criadoEm?: true
  }

  export type HistoricoEstudoCountAggregateInputType = {
    id?: true
    userId?: true
    tituloDaMateria?: true
    disciplina?: true
    dataEstudo?: true
    tempoEstudado?: true
    anotacoes?: true
    progresso?: true
    planoId?: true
    criadoEm?: true
    _all?: true
  }

  export type HistoricoEstudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoEstudo to aggregate.
     */
    where?: HistoricoEstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoEstudos to fetch.
     */
    orderBy?: HistoricoEstudoOrderByWithRelationInput | HistoricoEstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoEstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoEstudos
    **/
    _count?: true | HistoricoEstudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoEstudoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoEstudoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoEstudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoEstudoMaxAggregateInputType
  }

  export type GetHistoricoEstudoAggregateType<T extends HistoricoEstudoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoEstudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoEstudo[P]>
      : GetScalarType<T[P], AggregateHistoricoEstudo[P]>
  }




  export type HistoricoEstudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoEstudoWhereInput
    orderBy?: HistoricoEstudoOrderByWithAggregationInput | HistoricoEstudoOrderByWithAggregationInput[]
    by: HistoricoEstudoScalarFieldEnum[] | HistoricoEstudoScalarFieldEnum
    having?: HistoricoEstudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoEstudoCountAggregateInputType | true
    _avg?: HistoricoEstudoAvgAggregateInputType
    _sum?: HistoricoEstudoSumAggregateInputType
    _min?: HistoricoEstudoMinAggregateInputType
    _max?: HistoricoEstudoMaxAggregateInputType
  }

  export type HistoricoEstudoGroupByOutputType = {
    id: string
    userId: string
    tituloDaMateria: string
    disciplina: $Enums.DisciplinaNome
    dataEstudo: Date
    tempoEstudado: number
    anotacoes: string | null
    progresso: number
    planoId: string | null
    criadoEm: Date
    _count: HistoricoEstudoCountAggregateOutputType | null
    _avg: HistoricoEstudoAvgAggregateOutputType | null
    _sum: HistoricoEstudoSumAggregateOutputType | null
    _min: HistoricoEstudoMinAggregateOutputType | null
    _max: HistoricoEstudoMaxAggregateOutputType | null
  }

  type GetHistoricoEstudoGroupByPayload<T extends HistoricoEstudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoEstudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoEstudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoEstudoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoEstudoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoEstudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tituloDaMateria?: boolean
    disciplina?: boolean
    dataEstudo?: boolean
    tempoEstudado?: boolean
    anotacoes?: boolean
    progresso?: boolean
    planoId?: boolean
    criadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoEstudo"]>

  export type HistoricoEstudoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tituloDaMateria?: boolean
    disciplina?: boolean
    dataEstudo?: boolean
    tempoEstudado?: boolean
    anotacoes?: boolean
    progresso?: boolean
    planoId?: boolean
    criadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoEstudo"]>

  export type HistoricoEstudoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tituloDaMateria?: boolean
    disciplina?: boolean
    dataEstudo?: boolean
    tempoEstudado?: boolean
    anotacoes?: boolean
    progresso?: boolean
    planoId?: boolean
    criadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoEstudo"]>

  export type HistoricoEstudoSelectScalar = {
    id?: boolean
    userId?: boolean
    tituloDaMateria?: boolean
    disciplina?: boolean
    dataEstudo?: boolean
    tempoEstudado?: boolean
    anotacoes?: boolean
    progresso?: boolean
    planoId?: boolean
    criadoEm?: boolean
  }

  export type HistoricoEstudoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tituloDaMateria" | "disciplina" | "dataEstudo" | "tempoEstudado" | "anotacoes" | "progresso" | "planoId" | "criadoEm", ExtArgs["result"]["historicoEstudo"]>
  export type HistoricoEstudoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoricoEstudoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoricoEstudoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HistoricoEstudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoEstudo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tituloDaMateria: string
      disciplina: $Enums.DisciplinaNome
      dataEstudo: Date
      tempoEstudado: number
      anotacoes: string | null
      progresso: number
      planoId: string | null
      criadoEm: Date
    }, ExtArgs["result"]["historicoEstudo"]>
    composites: {}
  }

  type HistoricoEstudoGetPayload<S extends boolean | null | undefined | HistoricoEstudoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoEstudoPayload, S>

  type HistoricoEstudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoEstudoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoEstudoCountAggregateInputType | true
    }

  export interface HistoricoEstudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoEstudo'], meta: { name: 'HistoricoEstudo' } }
    /**
     * Find zero or one HistoricoEstudo that matches the filter.
     * @param {HistoricoEstudoFindUniqueArgs} args - Arguments to find a HistoricoEstudo
     * @example
     * // Get one HistoricoEstudo
     * const historicoEstudo = await prisma.historicoEstudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoEstudoFindUniqueArgs>(args: SelectSubset<T, HistoricoEstudoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoEstudoClient<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricoEstudo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoEstudoFindUniqueOrThrowArgs} args - Arguments to find a HistoricoEstudo
     * @example
     * // Get one HistoricoEstudo
     * const historicoEstudo = await prisma.historicoEstudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoEstudoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoEstudoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoEstudoClient<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoEstudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoEstudoFindFirstArgs} args - Arguments to find a HistoricoEstudo
     * @example
     * // Get one HistoricoEstudo
     * const historicoEstudo = await prisma.historicoEstudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoEstudoFindFirstArgs>(args?: SelectSubset<T, HistoricoEstudoFindFirstArgs<ExtArgs>>): Prisma__HistoricoEstudoClient<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoEstudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoEstudoFindFirstOrThrowArgs} args - Arguments to find a HistoricoEstudo
     * @example
     * // Get one HistoricoEstudo
     * const historicoEstudo = await prisma.historicoEstudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoEstudoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoEstudoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoEstudoClient<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricoEstudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoEstudoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoEstudos
     * const historicoEstudos = await prisma.historicoEstudo.findMany()
     * 
     * // Get first 10 HistoricoEstudos
     * const historicoEstudos = await prisma.historicoEstudo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoEstudoWithIdOnly = await prisma.historicoEstudo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoEstudoFindManyArgs>(args?: SelectSubset<T, HistoricoEstudoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricoEstudo.
     * @param {HistoricoEstudoCreateArgs} args - Arguments to create a HistoricoEstudo.
     * @example
     * // Create one HistoricoEstudo
     * const HistoricoEstudo = await prisma.historicoEstudo.create({
     *   data: {
     *     // ... data to create a HistoricoEstudo
     *   }
     * })
     * 
     */
    create<T extends HistoricoEstudoCreateArgs>(args: SelectSubset<T, HistoricoEstudoCreateArgs<ExtArgs>>): Prisma__HistoricoEstudoClient<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricoEstudos.
     * @param {HistoricoEstudoCreateManyArgs} args - Arguments to create many HistoricoEstudos.
     * @example
     * // Create many HistoricoEstudos
     * const historicoEstudo = await prisma.historicoEstudo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoEstudoCreateManyArgs>(args?: SelectSubset<T, HistoricoEstudoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricoEstudos and returns the data saved in the database.
     * @param {HistoricoEstudoCreateManyAndReturnArgs} args - Arguments to create many HistoricoEstudos.
     * @example
     * // Create many HistoricoEstudos
     * const historicoEstudo = await prisma.historicoEstudo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricoEstudos and only return the `id`
     * const historicoEstudoWithIdOnly = await prisma.historicoEstudo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoEstudoCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoEstudoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricoEstudo.
     * @param {HistoricoEstudoDeleteArgs} args - Arguments to delete one HistoricoEstudo.
     * @example
     * // Delete one HistoricoEstudo
     * const HistoricoEstudo = await prisma.historicoEstudo.delete({
     *   where: {
     *     // ... filter to delete one HistoricoEstudo
     *   }
     * })
     * 
     */
    delete<T extends HistoricoEstudoDeleteArgs>(args: SelectSubset<T, HistoricoEstudoDeleteArgs<ExtArgs>>): Prisma__HistoricoEstudoClient<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricoEstudo.
     * @param {HistoricoEstudoUpdateArgs} args - Arguments to update one HistoricoEstudo.
     * @example
     * // Update one HistoricoEstudo
     * const historicoEstudo = await prisma.historicoEstudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoEstudoUpdateArgs>(args: SelectSubset<T, HistoricoEstudoUpdateArgs<ExtArgs>>): Prisma__HistoricoEstudoClient<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricoEstudos.
     * @param {HistoricoEstudoDeleteManyArgs} args - Arguments to filter HistoricoEstudos to delete.
     * @example
     * // Delete a few HistoricoEstudos
     * const { count } = await prisma.historicoEstudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoEstudoDeleteManyArgs>(args?: SelectSubset<T, HistoricoEstudoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoEstudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoEstudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoEstudos
     * const historicoEstudo = await prisma.historicoEstudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoEstudoUpdateManyArgs>(args: SelectSubset<T, HistoricoEstudoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoEstudos and returns the data updated in the database.
     * @param {HistoricoEstudoUpdateManyAndReturnArgs} args - Arguments to update many HistoricoEstudos.
     * @example
     * // Update many HistoricoEstudos
     * const historicoEstudo = await prisma.historicoEstudo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricoEstudos and only return the `id`
     * const historicoEstudoWithIdOnly = await prisma.historicoEstudo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoricoEstudoUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoEstudoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricoEstudo.
     * @param {HistoricoEstudoUpsertArgs} args - Arguments to update or create a HistoricoEstudo.
     * @example
     * // Update or create a HistoricoEstudo
     * const historicoEstudo = await prisma.historicoEstudo.upsert({
     *   create: {
     *     // ... data to create a HistoricoEstudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoEstudo we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoEstudoUpsertArgs>(args: SelectSubset<T, HistoricoEstudoUpsertArgs<ExtArgs>>): Prisma__HistoricoEstudoClient<$Result.GetResult<Prisma.$HistoricoEstudoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricoEstudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoEstudoCountArgs} args - Arguments to filter HistoricoEstudos to count.
     * @example
     * // Count the number of HistoricoEstudos
     * const count = await prisma.historicoEstudo.count({
     *   where: {
     *     // ... the filter for the HistoricoEstudos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoEstudoCountArgs>(
      args?: Subset<T, HistoricoEstudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoEstudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoEstudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoEstudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricoEstudoAggregateArgs>(args: Subset<T, HistoricoEstudoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoEstudoAggregateType<T>>

    /**
     * Group by HistoricoEstudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoEstudoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoricoEstudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoEstudoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoEstudoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoricoEstudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoEstudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoEstudo model
   */
  readonly fields: HistoricoEstudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoEstudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoEstudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoricoEstudo model
   */
  interface HistoricoEstudoFieldRefs {
    readonly id: FieldRef<"HistoricoEstudo", 'String'>
    readonly userId: FieldRef<"HistoricoEstudo", 'String'>
    readonly tituloDaMateria: FieldRef<"HistoricoEstudo", 'String'>
    readonly disciplina: FieldRef<"HistoricoEstudo", 'DisciplinaNome'>
    readonly dataEstudo: FieldRef<"HistoricoEstudo", 'DateTime'>
    readonly tempoEstudado: FieldRef<"HistoricoEstudo", 'Int'>
    readonly anotacoes: FieldRef<"HistoricoEstudo", 'String'>
    readonly progresso: FieldRef<"HistoricoEstudo", 'Int'>
    readonly planoId: FieldRef<"HistoricoEstudo", 'String'>
    readonly criadoEm: FieldRef<"HistoricoEstudo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoEstudo findUnique
   */
  export type HistoricoEstudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoEstudo to fetch.
     */
    where: HistoricoEstudoWhereUniqueInput
  }

  /**
   * HistoricoEstudo findUniqueOrThrow
   */
  export type HistoricoEstudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoEstudo to fetch.
     */
    where: HistoricoEstudoWhereUniqueInput
  }

  /**
   * HistoricoEstudo findFirst
   */
  export type HistoricoEstudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoEstudo to fetch.
     */
    where?: HistoricoEstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoEstudos to fetch.
     */
    orderBy?: HistoricoEstudoOrderByWithRelationInput | HistoricoEstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoEstudos.
     */
    cursor?: HistoricoEstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoEstudos.
     */
    distinct?: HistoricoEstudoScalarFieldEnum | HistoricoEstudoScalarFieldEnum[]
  }

  /**
   * HistoricoEstudo findFirstOrThrow
   */
  export type HistoricoEstudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoEstudo to fetch.
     */
    where?: HistoricoEstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoEstudos to fetch.
     */
    orderBy?: HistoricoEstudoOrderByWithRelationInput | HistoricoEstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoEstudos.
     */
    cursor?: HistoricoEstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoEstudos.
     */
    distinct?: HistoricoEstudoScalarFieldEnum | HistoricoEstudoScalarFieldEnum[]
  }

  /**
   * HistoricoEstudo findMany
   */
  export type HistoricoEstudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoEstudos to fetch.
     */
    where?: HistoricoEstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoEstudos to fetch.
     */
    orderBy?: HistoricoEstudoOrderByWithRelationInput | HistoricoEstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoEstudos.
     */
    cursor?: HistoricoEstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoEstudos.
     */
    skip?: number
    distinct?: HistoricoEstudoScalarFieldEnum | HistoricoEstudoScalarFieldEnum[]
  }

  /**
   * HistoricoEstudo create
   */
  export type HistoricoEstudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoEstudo.
     */
    data: XOR<HistoricoEstudoCreateInput, HistoricoEstudoUncheckedCreateInput>
  }

  /**
   * HistoricoEstudo createMany
   */
  export type HistoricoEstudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoEstudos.
     */
    data: HistoricoEstudoCreateManyInput | HistoricoEstudoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricoEstudo createManyAndReturn
   */
  export type HistoricoEstudoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricoEstudos.
     */
    data: HistoricoEstudoCreateManyInput | HistoricoEstudoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoEstudo update
   */
  export type HistoricoEstudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoEstudo.
     */
    data: XOR<HistoricoEstudoUpdateInput, HistoricoEstudoUncheckedUpdateInput>
    /**
     * Choose, which HistoricoEstudo to update.
     */
    where: HistoricoEstudoWhereUniqueInput
  }

  /**
   * HistoricoEstudo updateMany
   */
  export type HistoricoEstudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoEstudos.
     */
    data: XOR<HistoricoEstudoUpdateManyMutationInput, HistoricoEstudoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoEstudos to update
     */
    where?: HistoricoEstudoWhereInput
    /**
     * Limit how many HistoricoEstudos to update.
     */
    limit?: number
  }

  /**
   * HistoricoEstudo updateManyAndReturn
   */
  export type HistoricoEstudoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * The data used to update HistoricoEstudos.
     */
    data: XOR<HistoricoEstudoUpdateManyMutationInput, HistoricoEstudoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoEstudos to update
     */
    where?: HistoricoEstudoWhereInput
    /**
     * Limit how many HistoricoEstudos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoEstudo upsert
   */
  export type HistoricoEstudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoEstudo to update in case it exists.
     */
    where: HistoricoEstudoWhereUniqueInput
    /**
     * In case the HistoricoEstudo found by the `where` argument doesn't exist, create a new HistoricoEstudo with this data.
     */
    create: XOR<HistoricoEstudoCreateInput, HistoricoEstudoUncheckedCreateInput>
    /**
     * In case the HistoricoEstudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoEstudoUpdateInput, HistoricoEstudoUncheckedUpdateInput>
  }

  /**
   * HistoricoEstudo delete
   */
  export type HistoricoEstudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
    /**
     * Filter which HistoricoEstudo to delete.
     */
    where: HistoricoEstudoWhereUniqueInput
  }

  /**
   * HistoricoEstudo deleteMany
   */
  export type HistoricoEstudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoEstudos to delete
     */
    where?: HistoricoEstudoWhereInput
    /**
     * Limit how many HistoricoEstudos to delete.
     */
    limit?: number
  }

  /**
   * HistoricoEstudo without action
   */
  export type HistoricoEstudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoEstudo
     */
    select?: HistoricoEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoEstudo
     */
    omit?: HistoricoEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoEstudoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    titulo: 'titulo',
    descricao: 'descricao',
    status: 'status',
    ordem: 'ordem',
    disciplina: 'disciplina',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const DiaDisciplinaMateriaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dia: 'dia',
    materiaId: 'materiaId',
    planoId: 'planoId',
    status: 'status',
    tempoEstudado: 'tempoEstudado',
    anotacoes: 'anotacoes',
    progresso: 'progresso',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type DiaDisciplinaMateriaScalarFieldEnum = (typeof DiaDisciplinaMateriaScalarFieldEnum)[keyof typeof DiaDisciplinaMateriaScalarFieldEnum]


  export const PlanoDeEstudosScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    titulo: 'titulo',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    ativo: 'ativo',
    progressoGeral: 'progressoGeral',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type PlanoDeEstudosScalarFieldEnum = (typeof PlanoDeEstudosScalarFieldEnum)[keyof typeof PlanoDeEstudosScalarFieldEnum]


  export const HistoricoEstudoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tituloDaMateria: 'tituloDaMateria',
    disciplina: 'disciplina',
    dataEstudo: 'dataEstudo',
    tempoEstudado: 'tempoEstudado',
    anotacoes: 'anotacoes',
    progresso: 'progresso',
    planoId: 'planoId',
    criadoEm: 'criadoEm'
  };

  export type HistoricoEstudoScalarFieldEnum = (typeof HistoricoEstudoScalarFieldEnum)[keyof typeof HistoricoEstudoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusConteudo'
   */
  export type EnumStatusConteudoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusConteudo'>
    


  /**
   * Reference to a field of type 'StatusConteudo[]'
   */
  export type ListEnumStatusConteudoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusConteudo[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DisciplinaNome'
   */
  export type EnumDisciplinaNomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisciplinaNome'>
    


  /**
   * Reference to a field of type 'DisciplinaNome[]'
   */
  export type ListEnumDisciplinaNomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisciplinaNome[]'>
    


  /**
   * Reference to a field of type 'DiaDaSemana'
   */
  export type EnumDiaDaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaDaSemana'>
    


  /**
   * Reference to a field of type 'DiaDaSemana[]'
   */
  export type ListEnumDiaDaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaDaSemana[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    materias?: MateriaListRelationFilter
    agendamentos?: DiaDisciplinaMateriaListRelationFilter
    planosDeEstudo?: PlanoDeEstudosListRelationFilter
    historicosEstudo?: HistoricoEstudoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    materias?: MateriaOrderByRelationAggregateInput
    agendamentos?: DiaDisciplinaMateriaOrderByRelationAggregateInput
    planosDeEstudo?: PlanoDeEstudosOrderByRelationAggregateInput
    historicosEstudo?: HistoricoEstudoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    materias?: MateriaListRelationFilter
    agendamentos?: DiaDisciplinaMateriaListRelationFilter
    planosDeEstudo?: PlanoDeEstudosListRelationFilter
    historicosEstudo?: HistoricoEstudoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id?: StringFilter<"Materia"> | string
    userId?: StringFilter<"Materia"> | string
    titulo?: StringFilter<"Materia"> | string
    descricao?: StringNullableFilter<"Materia"> | string | null
    status?: EnumStatusConteudoFilter<"Materia"> | $Enums.StatusConteudo
    ordem?: IntFilter<"Materia"> | number
    disciplina?: EnumDisciplinaNomeFilter<"Materia"> | $Enums.DisciplinaNome
    criadoEm?: DateTimeFilter<"Materia"> | Date | string
    atualizadoEm?: DateTimeFilter<"Materia"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    agendamentos?: DiaDisciplinaMateriaListRelationFilter
  }

  export type MateriaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    ordem?: SortOrder
    disciplina?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    user?: UserOrderByWithRelationInput
    agendamentos?: DiaDisciplinaMateriaOrderByRelationAggregateInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    userId?: StringFilter<"Materia"> | string
    titulo?: StringFilter<"Materia"> | string
    descricao?: StringNullableFilter<"Materia"> | string | null
    status?: EnumStatusConteudoFilter<"Materia"> | $Enums.StatusConteudo
    ordem?: IntFilter<"Materia"> | number
    disciplina?: EnumDisciplinaNomeFilter<"Materia"> | $Enums.DisciplinaNome
    criadoEm?: DateTimeFilter<"Materia"> | Date | string
    atualizadoEm?: DateTimeFilter<"Materia"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    agendamentos?: DiaDisciplinaMateriaListRelationFilter
  }, "id">

  export type MateriaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    ordem?: SortOrder
    disciplina?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Materia"> | string
    userId?: StringWithAggregatesFilter<"Materia"> | string
    titulo?: StringWithAggregatesFilter<"Materia"> | string
    descricao?: StringNullableWithAggregatesFilter<"Materia"> | string | null
    status?: EnumStatusConteudoWithAggregatesFilter<"Materia"> | $Enums.StatusConteudo
    ordem?: IntWithAggregatesFilter<"Materia"> | number
    disciplina?: EnumDisciplinaNomeWithAggregatesFilter<"Materia"> | $Enums.DisciplinaNome
    criadoEm?: DateTimeWithAggregatesFilter<"Materia"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Materia"> | Date | string
  }

  export type DiaDisciplinaMateriaWhereInput = {
    AND?: DiaDisciplinaMateriaWhereInput | DiaDisciplinaMateriaWhereInput[]
    OR?: DiaDisciplinaMateriaWhereInput[]
    NOT?: DiaDisciplinaMateriaWhereInput | DiaDisciplinaMateriaWhereInput[]
    id?: StringFilter<"DiaDisciplinaMateria"> | string
    userId?: StringFilter<"DiaDisciplinaMateria"> | string
    dia?: EnumDiaDaSemanaFilter<"DiaDisciplinaMateria"> | $Enums.DiaDaSemana
    materiaId?: StringFilter<"DiaDisciplinaMateria"> | string
    planoId?: StringNullableFilter<"DiaDisciplinaMateria"> | string | null
    status?: EnumStatusConteudoFilter<"DiaDisciplinaMateria"> | $Enums.StatusConteudo
    tempoEstudado?: IntNullableFilter<"DiaDisciplinaMateria"> | number | null
    anotacoes?: StringNullableFilter<"DiaDisciplinaMateria"> | string | null
    progresso?: IntFilter<"DiaDisciplinaMateria"> | number
    criadoEm?: DateTimeFilter<"DiaDisciplinaMateria"> | Date | string
    atualizadoEm?: DateTimeFilter<"DiaDisciplinaMateria"> | Date | string
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    plano?: XOR<PlanoDeEstudosNullableScalarRelationFilter, PlanoDeEstudosWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DiaDisciplinaMateriaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dia?: SortOrder
    materiaId?: SortOrder
    planoId?: SortOrderInput | SortOrder
    status?: SortOrder
    tempoEstudado?: SortOrderInput | SortOrder
    anotacoes?: SortOrderInput | SortOrder
    progresso?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    materia?: MateriaOrderByWithRelationInput
    plano?: PlanoDeEstudosOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DiaDisciplinaMateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiaDisciplinaMateriaWhereInput | DiaDisciplinaMateriaWhereInput[]
    OR?: DiaDisciplinaMateriaWhereInput[]
    NOT?: DiaDisciplinaMateriaWhereInput | DiaDisciplinaMateriaWhereInput[]
    userId?: StringFilter<"DiaDisciplinaMateria"> | string
    dia?: EnumDiaDaSemanaFilter<"DiaDisciplinaMateria"> | $Enums.DiaDaSemana
    materiaId?: StringFilter<"DiaDisciplinaMateria"> | string
    planoId?: StringNullableFilter<"DiaDisciplinaMateria"> | string | null
    status?: EnumStatusConteudoFilter<"DiaDisciplinaMateria"> | $Enums.StatusConteudo
    tempoEstudado?: IntNullableFilter<"DiaDisciplinaMateria"> | number | null
    anotacoes?: StringNullableFilter<"DiaDisciplinaMateria"> | string | null
    progresso?: IntFilter<"DiaDisciplinaMateria"> | number
    criadoEm?: DateTimeFilter<"DiaDisciplinaMateria"> | Date | string
    atualizadoEm?: DateTimeFilter<"DiaDisciplinaMateria"> | Date | string
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    plano?: XOR<PlanoDeEstudosNullableScalarRelationFilter, PlanoDeEstudosWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DiaDisciplinaMateriaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dia?: SortOrder
    materiaId?: SortOrder
    planoId?: SortOrderInput | SortOrder
    status?: SortOrder
    tempoEstudado?: SortOrderInput | SortOrder
    anotacoes?: SortOrderInput | SortOrder
    progresso?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: DiaDisciplinaMateriaCountOrderByAggregateInput
    _avg?: DiaDisciplinaMateriaAvgOrderByAggregateInput
    _max?: DiaDisciplinaMateriaMaxOrderByAggregateInput
    _min?: DiaDisciplinaMateriaMinOrderByAggregateInput
    _sum?: DiaDisciplinaMateriaSumOrderByAggregateInput
  }

  export type DiaDisciplinaMateriaScalarWhereWithAggregatesInput = {
    AND?: DiaDisciplinaMateriaScalarWhereWithAggregatesInput | DiaDisciplinaMateriaScalarWhereWithAggregatesInput[]
    OR?: DiaDisciplinaMateriaScalarWhereWithAggregatesInput[]
    NOT?: DiaDisciplinaMateriaScalarWhereWithAggregatesInput | DiaDisciplinaMateriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiaDisciplinaMateria"> | string
    userId?: StringWithAggregatesFilter<"DiaDisciplinaMateria"> | string
    dia?: EnumDiaDaSemanaWithAggregatesFilter<"DiaDisciplinaMateria"> | $Enums.DiaDaSemana
    materiaId?: StringWithAggregatesFilter<"DiaDisciplinaMateria"> | string
    planoId?: StringNullableWithAggregatesFilter<"DiaDisciplinaMateria"> | string | null
    status?: EnumStatusConteudoWithAggregatesFilter<"DiaDisciplinaMateria"> | $Enums.StatusConteudo
    tempoEstudado?: IntNullableWithAggregatesFilter<"DiaDisciplinaMateria"> | number | null
    anotacoes?: StringNullableWithAggregatesFilter<"DiaDisciplinaMateria"> | string | null
    progresso?: IntWithAggregatesFilter<"DiaDisciplinaMateria"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"DiaDisciplinaMateria"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"DiaDisciplinaMateria"> | Date | string
  }

  export type PlanoDeEstudosWhereInput = {
    AND?: PlanoDeEstudosWhereInput | PlanoDeEstudosWhereInput[]
    OR?: PlanoDeEstudosWhereInput[]
    NOT?: PlanoDeEstudosWhereInput | PlanoDeEstudosWhereInput[]
    id?: StringFilter<"PlanoDeEstudos"> | string
    userId?: StringFilter<"PlanoDeEstudos"> | string
    titulo?: StringFilter<"PlanoDeEstudos"> | string
    dataInicio?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
    dataFim?: DateTimeNullableFilter<"PlanoDeEstudos"> | Date | string | null
    ativo?: BoolFilter<"PlanoDeEstudos"> | boolean
    progressoGeral?: IntFilter<"PlanoDeEstudos"> | number
    criadoEm?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
    atualizadoEm?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
    registros?: DiaDisciplinaMateriaListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlanoDeEstudosOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    ativo?: SortOrder
    progressoGeral?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    registros?: DiaDisciplinaMateriaOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PlanoDeEstudosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanoDeEstudosWhereInput | PlanoDeEstudosWhereInput[]
    OR?: PlanoDeEstudosWhereInput[]
    NOT?: PlanoDeEstudosWhereInput | PlanoDeEstudosWhereInput[]
    userId?: StringFilter<"PlanoDeEstudos"> | string
    titulo?: StringFilter<"PlanoDeEstudos"> | string
    dataInicio?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
    dataFim?: DateTimeNullableFilter<"PlanoDeEstudos"> | Date | string | null
    ativo?: BoolFilter<"PlanoDeEstudos"> | boolean
    progressoGeral?: IntFilter<"PlanoDeEstudos"> | number
    criadoEm?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
    atualizadoEm?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
    registros?: DiaDisciplinaMateriaListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlanoDeEstudosOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    ativo?: SortOrder
    progressoGeral?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: PlanoDeEstudosCountOrderByAggregateInput
    _avg?: PlanoDeEstudosAvgOrderByAggregateInput
    _max?: PlanoDeEstudosMaxOrderByAggregateInput
    _min?: PlanoDeEstudosMinOrderByAggregateInput
    _sum?: PlanoDeEstudosSumOrderByAggregateInput
  }

  export type PlanoDeEstudosScalarWhereWithAggregatesInput = {
    AND?: PlanoDeEstudosScalarWhereWithAggregatesInput | PlanoDeEstudosScalarWhereWithAggregatesInput[]
    OR?: PlanoDeEstudosScalarWhereWithAggregatesInput[]
    NOT?: PlanoDeEstudosScalarWhereWithAggregatesInput | PlanoDeEstudosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanoDeEstudos"> | string
    userId?: StringWithAggregatesFilter<"PlanoDeEstudos"> | string
    titulo?: StringWithAggregatesFilter<"PlanoDeEstudos"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"PlanoDeEstudos"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"PlanoDeEstudos"> | Date | string | null
    ativo?: BoolWithAggregatesFilter<"PlanoDeEstudos"> | boolean
    progressoGeral?: IntWithAggregatesFilter<"PlanoDeEstudos"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"PlanoDeEstudos"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"PlanoDeEstudos"> | Date | string
  }

  export type HistoricoEstudoWhereInput = {
    AND?: HistoricoEstudoWhereInput | HistoricoEstudoWhereInput[]
    OR?: HistoricoEstudoWhereInput[]
    NOT?: HistoricoEstudoWhereInput | HistoricoEstudoWhereInput[]
    id?: StringFilter<"HistoricoEstudo"> | string
    userId?: StringFilter<"HistoricoEstudo"> | string
    tituloDaMateria?: StringFilter<"HistoricoEstudo"> | string
    disciplina?: EnumDisciplinaNomeFilter<"HistoricoEstudo"> | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFilter<"HistoricoEstudo"> | Date | string
    tempoEstudado?: IntFilter<"HistoricoEstudo"> | number
    anotacoes?: StringNullableFilter<"HistoricoEstudo"> | string | null
    progresso?: IntFilter<"HistoricoEstudo"> | number
    planoId?: StringNullableFilter<"HistoricoEstudo"> | string | null
    criadoEm?: DateTimeFilter<"HistoricoEstudo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HistoricoEstudoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tituloDaMateria?: SortOrder
    disciplina?: SortOrder
    dataEstudo?: SortOrder
    tempoEstudado?: SortOrder
    anotacoes?: SortOrderInput | SortOrder
    progresso?: SortOrder
    planoId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HistoricoEstudoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricoEstudoWhereInput | HistoricoEstudoWhereInput[]
    OR?: HistoricoEstudoWhereInput[]
    NOT?: HistoricoEstudoWhereInput | HistoricoEstudoWhereInput[]
    userId?: StringFilter<"HistoricoEstudo"> | string
    tituloDaMateria?: StringFilter<"HistoricoEstudo"> | string
    disciplina?: EnumDisciplinaNomeFilter<"HistoricoEstudo"> | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFilter<"HistoricoEstudo"> | Date | string
    tempoEstudado?: IntFilter<"HistoricoEstudo"> | number
    anotacoes?: StringNullableFilter<"HistoricoEstudo"> | string | null
    progresso?: IntFilter<"HistoricoEstudo"> | number
    planoId?: StringNullableFilter<"HistoricoEstudo"> | string | null
    criadoEm?: DateTimeFilter<"HistoricoEstudo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HistoricoEstudoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tituloDaMateria?: SortOrder
    disciplina?: SortOrder
    dataEstudo?: SortOrder
    tempoEstudado?: SortOrder
    anotacoes?: SortOrderInput | SortOrder
    progresso?: SortOrder
    planoId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: HistoricoEstudoCountOrderByAggregateInput
    _avg?: HistoricoEstudoAvgOrderByAggregateInput
    _max?: HistoricoEstudoMaxOrderByAggregateInput
    _min?: HistoricoEstudoMinOrderByAggregateInput
    _sum?: HistoricoEstudoSumOrderByAggregateInput
  }

  export type HistoricoEstudoScalarWhereWithAggregatesInput = {
    AND?: HistoricoEstudoScalarWhereWithAggregatesInput | HistoricoEstudoScalarWhereWithAggregatesInput[]
    OR?: HistoricoEstudoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoEstudoScalarWhereWithAggregatesInput | HistoricoEstudoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoricoEstudo"> | string
    userId?: StringWithAggregatesFilter<"HistoricoEstudo"> | string
    tituloDaMateria?: StringWithAggregatesFilter<"HistoricoEstudo"> | string
    disciplina?: EnumDisciplinaNomeWithAggregatesFilter<"HistoricoEstudo"> | $Enums.DisciplinaNome
    dataEstudo?: DateTimeWithAggregatesFilter<"HistoricoEstudo"> | Date | string
    tempoEstudado?: IntWithAggregatesFilter<"HistoricoEstudo"> | number
    anotacoes?: StringNullableWithAggregatesFilter<"HistoricoEstudo"> | string | null
    progresso?: IntWithAggregatesFilter<"HistoricoEstudo"> | number
    planoId?: StringNullableWithAggregatesFilter<"HistoricoEstudo"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"HistoricoEstudo"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materias?: MateriaCreateNestedManyWithoutUserInput
    agendamentos?: DiaDisciplinaMateriaCreateNestedManyWithoutUserInput
    planosDeEstudo?: PlanoDeEstudosCreateNestedManyWithoutUserInput
    historicosEstudo?: HistoricoEstudoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materias?: MateriaUncheckedCreateNestedManyWithoutUserInput
    agendamentos?: DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutUserInput
    planosDeEstudo?: PlanoDeEstudosUncheckedCreateNestedManyWithoutUserInput
    historicosEstudo?: HistoricoEstudoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUpdateManyWithoutUserNestedInput
    agendamentos?: DiaDisciplinaMateriaUpdateManyWithoutUserNestedInput
    planosDeEstudo?: PlanoDeEstudosUpdateManyWithoutUserNestedInput
    historicosEstudo?: HistoricoEstudoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUncheckedUpdateManyWithoutUserNestedInput
    agendamentos?: DiaDisciplinaMateriaUncheckedUpdateManyWithoutUserNestedInput
    planosDeEstudo?: PlanoDeEstudosUncheckedUpdateManyWithoutUserNestedInput
    historicosEstudo?: HistoricoEstudoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriaCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status?: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    user: UserCreateNestedOneWithoutMateriasInput
    agendamentos?: DiaDisciplinaMateriaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateInput = {
    id?: string
    userId: string
    titulo: string
    descricao?: string | null
    status?: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    agendamentos?: DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMateriasNestedInput
    agendamentos?: DiaDisciplinaMateriaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: DiaDisciplinaMateriaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaCreateManyInput = {
    id?: string
    userId: string
    titulo: string
    descricao?: string | null
    status?: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type MateriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaCreateInput = {
    id?: string
    dia: $Enums.DiaDaSemana
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    materia: MateriaCreateNestedOneWithoutAgendamentosInput
    plano?: PlanoDeEstudosCreateNestedOneWithoutRegistrosInput
    user: UserCreateNestedOneWithoutAgendamentosInput
  }

  export type DiaDisciplinaMateriaUncheckedCreateInput = {
    id?: string
    userId: string
    dia: $Enums.DiaDaSemana
    materiaId: string
    planoId?: string | null
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaDisciplinaMateriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneRequiredWithoutAgendamentosNestedInput
    plano?: PlanoDeEstudosUpdateOneWithoutRegistrosNestedInput
    user?: UserUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type DiaDisciplinaMateriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    materiaId?: StringFieldUpdateOperationsInput | string
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaCreateManyInput = {
    id?: string
    userId: string
    dia: $Enums.DiaDaSemana
    materiaId: string
    planoId?: string | null
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaDisciplinaMateriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    materiaId?: StringFieldUpdateOperationsInput | string
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanoDeEstudosCreateInput = {
    id?: string
    titulo: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    progressoGeral?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    registros?: DiaDisciplinaMateriaCreateNestedManyWithoutPlanoInput
    user: UserCreateNestedOneWithoutPlanosDeEstudoInput
  }

  export type PlanoDeEstudosUncheckedCreateInput = {
    id?: string
    userId: string
    titulo: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    progressoGeral?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    registros?: DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutPlanoInput
  }

  export type PlanoDeEstudosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: DiaDisciplinaMateriaUpdateManyWithoutPlanoNestedInput
    user?: UserUpdateOneRequiredWithoutPlanosDeEstudoNestedInput
  }

  export type PlanoDeEstudosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: DiaDisciplinaMateriaUncheckedUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoDeEstudosCreateManyInput = {
    id?: string
    userId: string
    titulo: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    progressoGeral?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PlanoDeEstudosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanoDeEstudosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoEstudoCreateInput = {
    id?: string
    tituloDaMateria: string
    disciplina: $Enums.DisciplinaNome
    dataEstudo: Date | string
    tempoEstudado: number
    anotacoes?: string | null
    progresso?: number
    planoId?: string | null
    criadoEm?: Date | string
    user: UserCreateNestedOneWithoutHistoricosEstudoInput
  }

  export type HistoricoEstudoUncheckedCreateInput = {
    id?: string
    userId: string
    tituloDaMateria: string
    disciplina: $Enums.DisciplinaNome
    dataEstudo: Date | string
    tempoEstudado: number
    anotacoes?: string | null
    progresso?: number
    planoId?: string | null
    criadoEm?: Date | string
  }

  export type HistoricoEstudoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tituloDaMateria?: StringFieldUpdateOperationsInput | string
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFieldUpdateOperationsInput | Date | string
    tempoEstudado?: IntFieldUpdateOperationsInput | number
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoricosEstudoNestedInput
  }

  export type HistoricoEstudoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tituloDaMateria?: StringFieldUpdateOperationsInput | string
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFieldUpdateOperationsInput | Date | string
    tempoEstudado?: IntFieldUpdateOperationsInput | number
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoEstudoCreateManyInput = {
    id?: string
    userId: string
    tituloDaMateria: string
    disciplina: $Enums.DisciplinaNome
    dataEstudo: Date | string
    tempoEstudado: number
    anotacoes?: string | null
    progresso?: number
    planoId?: string | null
    criadoEm?: Date | string
  }

  export type HistoricoEstudoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tituloDaMateria?: StringFieldUpdateOperationsInput | string
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFieldUpdateOperationsInput | Date | string
    tempoEstudado?: IntFieldUpdateOperationsInput | number
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoEstudoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tituloDaMateria?: StringFieldUpdateOperationsInput | string
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFieldUpdateOperationsInput | Date | string
    tempoEstudado?: IntFieldUpdateOperationsInput | number
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type DiaDisciplinaMateriaListRelationFilter = {
    every?: DiaDisciplinaMateriaWhereInput
    some?: DiaDisciplinaMateriaWhereInput
    none?: DiaDisciplinaMateriaWhereInput
  }

  export type PlanoDeEstudosListRelationFilter = {
    every?: PlanoDeEstudosWhereInput
    some?: PlanoDeEstudosWhereInput
    none?: PlanoDeEstudosWhereInput
  }

  export type HistoricoEstudoListRelationFilter = {
    every?: HistoricoEstudoWhereInput
    some?: HistoricoEstudoWhereInput
    none?: HistoricoEstudoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiaDisciplinaMateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanoDeEstudosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoEstudoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusConteudoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusConteudo | EnumStatusConteudoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusConteudo[] | ListEnumStatusConteudoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusConteudo[] | ListEnumStatusConteudoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusConteudoFilter<$PrismaModel> | $Enums.StatusConteudo
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumDisciplinaNomeFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplinaNome | EnumDisciplinaNomeFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplinaNome[] | ListEnumDisciplinaNomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplinaNome[] | ListEnumDisciplinaNomeFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplinaNomeFilter<$PrismaModel> | $Enums.DisciplinaNome
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MateriaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    ordem?: SortOrder
    disciplina?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    ordem?: SortOrder
    disciplina?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    ordem?: SortOrder
    disciplina?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type EnumStatusConteudoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusConteudo | EnumStatusConteudoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusConteudo[] | ListEnumStatusConteudoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusConteudo[] | ListEnumStatusConteudoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusConteudoWithAggregatesFilter<$PrismaModel> | $Enums.StatusConteudo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusConteudoFilter<$PrismaModel>
    _max?: NestedEnumStatusConteudoFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDisciplinaNomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplinaNome | EnumDisciplinaNomeFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplinaNome[] | ListEnumDisciplinaNomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplinaNome[] | ListEnumDisciplinaNomeFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplinaNomeWithAggregatesFilter<$PrismaModel> | $Enums.DisciplinaNome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisciplinaNomeFilter<$PrismaModel>
    _max?: NestedEnumDisciplinaNomeFilter<$PrismaModel>
  }

  export type EnumDiaDaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaDaSemana | EnumDiaDaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaDaSemana[] | ListEnumDiaDaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaDaSemana[] | ListEnumDiaDaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaDaSemanaFilter<$PrismaModel> | $Enums.DiaDaSemana
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MateriaScalarRelationFilter = {
    is?: MateriaWhereInput
    isNot?: MateriaWhereInput
  }

  export type PlanoDeEstudosNullableScalarRelationFilter = {
    is?: PlanoDeEstudosWhereInput | null
    isNot?: PlanoDeEstudosWhereInput | null
  }

  export type DiaDisciplinaMateriaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dia?: SortOrder
    materiaId?: SortOrder
    planoId?: SortOrder
    status?: SortOrder
    tempoEstudado?: SortOrder
    anotacoes?: SortOrder
    progresso?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type DiaDisciplinaMateriaAvgOrderByAggregateInput = {
    tempoEstudado?: SortOrder
    progresso?: SortOrder
  }

  export type DiaDisciplinaMateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dia?: SortOrder
    materiaId?: SortOrder
    planoId?: SortOrder
    status?: SortOrder
    tempoEstudado?: SortOrder
    anotacoes?: SortOrder
    progresso?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type DiaDisciplinaMateriaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dia?: SortOrder
    materiaId?: SortOrder
    planoId?: SortOrder
    status?: SortOrder
    tempoEstudado?: SortOrder
    anotacoes?: SortOrder
    progresso?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type DiaDisciplinaMateriaSumOrderByAggregateInput = {
    tempoEstudado?: SortOrder
    progresso?: SortOrder
  }

  export type EnumDiaDaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaDaSemana | EnumDiaDaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaDaSemana[] | ListEnumDiaDaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaDaSemana[] | ListEnumDiaDaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaDaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaDaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaDaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaDaSemanaFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlanoDeEstudosCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    progressoGeral?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PlanoDeEstudosAvgOrderByAggregateInput = {
    progressoGeral?: SortOrder
  }

  export type PlanoDeEstudosMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    progressoGeral?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PlanoDeEstudosMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    titulo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    ativo?: SortOrder
    progressoGeral?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PlanoDeEstudosSumOrderByAggregateInput = {
    progressoGeral?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HistoricoEstudoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tituloDaMateria?: SortOrder
    disciplina?: SortOrder
    dataEstudo?: SortOrder
    tempoEstudado?: SortOrder
    anotacoes?: SortOrder
    progresso?: SortOrder
    planoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type HistoricoEstudoAvgOrderByAggregateInput = {
    tempoEstudado?: SortOrder
    progresso?: SortOrder
  }

  export type HistoricoEstudoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tituloDaMateria?: SortOrder
    disciplina?: SortOrder
    dataEstudo?: SortOrder
    tempoEstudado?: SortOrder
    anotacoes?: SortOrder
    progresso?: SortOrder
    planoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type HistoricoEstudoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tituloDaMateria?: SortOrder
    disciplina?: SortOrder
    dataEstudo?: SortOrder
    tempoEstudado?: SortOrder
    anotacoes?: SortOrder
    progresso?: SortOrder
    planoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type HistoricoEstudoSumOrderByAggregateInput = {
    tempoEstudado?: SortOrder
    progresso?: SortOrder
  }

  export type MateriaCreateNestedManyWithoutUserInput = {
    create?: XOR<MateriaCreateWithoutUserInput, MateriaUncheckedCreateWithoutUserInput> | MateriaCreateWithoutUserInput[] | MateriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUserInput | MateriaCreateOrConnectWithoutUserInput[]
    createMany?: MateriaCreateManyUserInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type DiaDisciplinaMateriaCreateNestedManyWithoutUserInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutUserInput, DiaDisciplinaMateriaUncheckedCreateWithoutUserInput> | DiaDisciplinaMateriaCreateWithoutUserInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutUserInput | DiaDisciplinaMateriaCreateOrConnectWithoutUserInput[]
    createMany?: DiaDisciplinaMateriaCreateManyUserInputEnvelope
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
  }

  export type PlanoDeEstudosCreateNestedManyWithoutUserInput = {
    create?: XOR<PlanoDeEstudosCreateWithoutUserInput, PlanoDeEstudosUncheckedCreateWithoutUserInput> | PlanoDeEstudosCreateWithoutUserInput[] | PlanoDeEstudosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanoDeEstudosCreateOrConnectWithoutUserInput | PlanoDeEstudosCreateOrConnectWithoutUserInput[]
    createMany?: PlanoDeEstudosCreateManyUserInputEnvelope
    connect?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
  }

  export type HistoricoEstudoCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoricoEstudoCreateWithoutUserInput, HistoricoEstudoUncheckedCreateWithoutUserInput> | HistoricoEstudoCreateWithoutUserInput[] | HistoricoEstudoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricoEstudoCreateOrConnectWithoutUserInput | HistoricoEstudoCreateOrConnectWithoutUserInput[]
    createMany?: HistoricoEstudoCreateManyUserInputEnvelope
    connect?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MateriaCreateWithoutUserInput, MateriaUncheckedCreateWithoutUserInput> | MateriaCreateWithoutUserInput[] | MateriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUserInput | MateriaCreateOrConnectWithoutUserInput[]
    createMany?: MateriaCreateManyUserInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutUserInput, DiaDisciplinaMateriaUncheckedCreateWithoutUserInput> | DiaDisciplinaMateriaCreateWithoutUserInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutUserInput | DiaDisciplinaMateriaCreateOrConnectWithoutUserInput[]
    createMany?: DiaDisciplinaMateriaCreateManyUserInputEnvelope
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
  }

  export type PlanoDeEstudosUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlanoDeEstudosCreateWithoutUserInput, PlanoDeEstudosUncheckedCreateWithoutUserInput> | PlanoDeEstudosCreateWithoutUserInput[] | PlanoDeEstudosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanoDeEstudosCreateOrConnectWithoutUserInput | PlanoDeEstudosCreateOrConnectWithoutUserInput[]
    createMany?: PlanoDeEstudosCreateManyUserInputEnvelope
    connect?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
  }

  export type HistoricoEstudoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoricoEstudoCreateWithoutUserInput, HistoricoEstudoUncheckedCreateWithoutUserInput> | HistoricoEstudoCreateWithoutUserInput[] | HistoricoEstudoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricoEstudoCreateOrConnectWithoutUserInput | HistoricoEstudoCreateOrConnectWithoutUserInput[]
    createMany?: HistoricoEstudoCreateManyUserInputEnvelope
    connect?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MateriaUpdateManyWithoutUserNestedInput = {
    create?: XOR<MateriaCreateWithoutUserInput, MateriaUncheckedCreateWithoutUserInput> | MateriaCreateWithoutUserInput[] | MateriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUserInput | MateriaCreateOrConnectWithoutUserInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutUserInput | MateriaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MateriaCreateManyUserInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutUserInput | MateriaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutUserInput | MateriaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type DiaDisciplinaMateriaUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutUserInput, DiaDisciplinaMateriaUncheckedCreateWithoutUserInput> | DiaDisciplinaMateriaCreateWithoutUserInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutUserInput | DiaDisciplinaMateriaCreateOrConnectWithoutUserInput[]
    upsert?: DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutUserInput | DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiaDisciplinaMateriaCreateManyUserInputEnvelope
    set?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    disconnect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    delete?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    update?: DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutUserInput | DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiaDisciplinaMateriaUpdateManyWithWhereWithoutUserInput | DiaDisciplinaMateriaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiaDisciplinaMateriaScalarWhereInput | DiaDisciplinaMateriaScalarWhereInput[]
  }

  export type PlanoDeEstudosUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlanoDeEstudosCreateWithoutUserInput, PlanoDeEstudosUncheckedCreateWithoutUserInput> | PlanoDeEstudosCreateWithoutUserInput[] | PlanoDeEstudosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanoDeEstudosCreateOrConnectWithoutUserInput | PlanoDeEstudosCreateOrConnectWithoutUserInput[]
    upsert?: PlanoDeEstudosUpsertWithWhereUniqueWithoutUserInput | PlanoDeEstudosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlanoDeEstudosCreateManyUserInputEnvelope
    set?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
    disconnect?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
    delete?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
    connect?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
    update?: PlanoDeEstudosUpdateWithWhereUniqueWithoutUserInput | PlanoDeEstudosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlanoDeEstudosUpdateManyWithWhereWithoutUserInput | PlanoDeEstudosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlanoDeEstudosScalarWhereInput | PlanoDeEstudosScalarWhereInput[]
  }

  export type HistoricoEstudoUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoricoEstudoCreateWithoutUserInput, HistoricoEstudoUncheckedCreateWithoutUserInput> | HistoricoEstudoCreateWithoutUserInput[] | HistoricoEstudoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricoEstudoCreateOrConnectWithoutUserInput | HistoricoEstudoCreateOrConnectWithoutUserInput[]
    upsert?: HistoricoEstudoUpsertWithWhereUniqueWithoutUserInput | HistoricoEstudoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoricoEstudoCreateManyUserInputEnvelope
    set?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
    disconnect?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
    delete?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
    connect?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
    update?: HistoricoEstudoUpdateWithWhereUniqueWithoutUserInput | HistoricoEstudoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoricoEstudoUpdateManyWithWhereWithoutUserInput | HistoricoEstudoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoricoEstudoScalarWhereInput | HistoricoEstudoScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MateriaCreateWithoutUserInput, MateriaUncheckedCreateWithoutUserInput> | MateriaCreateWithoutUserInput[] | MateriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutUserInput | MateriaCreateOrConnectWithoutUserInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutUserInput | MateriaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MateriaCreateManyUserInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutUserInput | MateriaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutUserInput | MateriaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type DiaDisciplinaMateriaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutUserInput, DiaDisciplinaMateriaUncheckedCreateWithoutUserInput> | DiaDisciplinaMateriaCreateWithoutUserInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutUserInput | DiaDisciplinaMateriaCreateOrConnectWithoutUserInput[]
    upsert?: DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutUserInput | DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiaDisciplinaMateriaCreateManyUserInputEnvelope
    set?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    disconnect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    delete?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    update?: DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutUserInput | DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiaDisciplinaMateriaUpdateManyWithWhereWithoutUserInput | DiaDisciplinaMateriaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiaDisciplinaMateriaScalarWhereInput | DiaDisciplinaMateriaScalarWhereInput[]
  }

  export type PlanoDeEstudosUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlanoDeEstudosCreateWithoutUserInput, PlanoDeEstudosUncheckedCreateWithoutUserInput> | PlanoDeEstudosCreateWithoutUserInput[] | PlanoDeEstudosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanoDeEstudosCreateOrConnectWithoutUserInput | PlanoDeEstudosCreateOrConnectWithoutUserInput[]
    upsert?: PlanoDeEstudosUpsertWithWhereUniqueWithoutUserInput | PlanoDeEstudosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlanoDeEstudosCreateManyUserInputEnvelope
    set?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
    disconnect?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
    delete?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
    connect?: PlanoDeEstudosWhereUniqueInput | PlanoDeEstudosWhereUniqueInput[]
    update?: PlanoDeEstudosUpdateWithWhereUniqueWithoutUserInput | PlanoDeEstudosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlanoDeEstudosUpdateManyWithWhereWithoutUserInput | PlanoDeEstudosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlanoDeEstudosScalarWhereInput | PlanoDeEstudosScalarWhereInput[]
  }

  export type HistoricoEstudoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoricoEstudoCreateWithoutUserInput, HistoricoEstudoUncheckedCreateWithoutUserInput> | HistoricoEstudoCreateWithoutUserInput[] | HistoricoEstudoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoricoEstudoCreateOrConnectWithoutUserInput | HistoricoEstudoCreateOrConnectWithoutUserInput[]
    upsert?: HistoricoEstudoUpsertWithWhereUniqueWithoutUserInput | HistoricoEstudoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoricoEstudoCreateManyUserInputEnvelope
    set?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
    disconnect?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
    delete?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
    connect?: HistoricoEstudoWhereUniqueInput | HistoricoEstudoWhereUniqueInput[]
    update?: HistoricoEstudoUpdateWithWhereUniqueWithoutUserInput | HistoricoEstudoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoricoEstudoUpdateManyWithWhereWithoutUserInput | HistoricoEstudoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoricoEstudoScalarWhereInput | HistoricoEstudoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMateriasInput = {
    create?: XOR<UserCreateWithoutMateriasInput, UserUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMateriasInput
    connect?: UserWhereUniqueInput
  }

  export type DiaDisciplinaMateriaCreateNestedManyWithoutMateriaInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutMateriaInput, DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput> | DiaDisciplinaMateriaCreateWithoutMateriaInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput | DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput[]
    createMany?: DiaDisciplinaMateriaCreateManyMateriaInputEnvelope
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
  }

  export type DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutMateriaInput, DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput> | DiaDisciplinaMateriaCreateWithoutMateriaInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput | DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput[]
    createMany?: DiaDisciplinaMateriaCreateManyMateriaInputEnvelope
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
  }

  export type EnumStatusConteudoFieldUpdateOperationsInput = {
    set?: $Enums.StatusConteudo
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDisciplinaNomeFieldUpdateOperationsInput = {
    set?: $Enums.DisciplinaNome
  }

  export type UserUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<UserCreateWithoutMateriasInput, UserUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMateriasInput
    upsert?: UserUpsertWithoutMateriasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMateriasInput, UserUpdateWithoutMateriasInput>, UserUncheckedUpdateWithoutMateriasInput>
  }

  export type DiaDisciplinaMateriaUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutMateriaInput, DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput> | DiaDisciplinaMateriaCreateWithoutMateriaInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput | DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput[]
    upsert?: DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutMateriaInput | DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: DiaDisciplinaMateriaCreateManyMateriaInputEnvelope
    set?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    disconnect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    delete?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    update?: DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutMateriaInput | DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: DiaDisciplinaMateriaUpdateManyWithWhereWithoutMateriaInput | DiaDisciplinaMateriaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: DiaDisciplinaMateriaScalarWhereInput | DiaDisciplinaMateriaScalarWhereInput[]
  }

  export type DiaDisciplinaMateriaUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutMateriaInput, DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput> | DiaDisciplinaMateriaCreateWithoutMateriaInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput | DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput[]
    upsert?: DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutMateriaInput | DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: DiaDisciplinaMateriaCreateManyMateriaInputEnvelope
    set?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    disconnect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    delete?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    update?: DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutMateriaInput | DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: DiaDisciplinaMateriaUpdateManyWithWhereWithoutMateriaInput | DiaDisciplinaMateriaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: DiaDisciplinaMateriaScalarWhereInput | DiaDisciplinaMateriaScalarWhereInput[]
  }

  export type MateriaCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<MateriaCreateWithoutAgendamentosInput, MateriaUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutAgendamentosInput
    connect?: MateriaWhereUniqueInput
  }

  export type PlanoDeEstudosCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<PlanoDeEstudosCreateWithoutRegistrosInput, PlanoDeEstudosUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: PlanoDeEstudosCreateOrConnectWithoutRegistrosInput
    connect?: PlanoDeEstudosWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<UserCreateWithoutAgendamentosInput, UserUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgendamentosInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDiaDaSemanaFieldUpdateOperationsInput = {
    set?: $Enums.DiaDaSemana
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MateriaUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<MateriaCreateWithoutAgendamentosInput, MateriaUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutAgendamentosInput
    upsert?: MateriaUpsertWithoutAgendamentosInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutAgendamentosInput, MateriaUpdateWithoutAgendamentosInput>, MateriaUncheckedUpdateWithoutAgendamentosInput>
  }

  export type PlanoDeEstudosUpdateOneWithoutRegistrosNestedInput = {
    create?: XOR<PlanoDeEstudosCreateWithoutRegistrosInput, PlanoDeEstudosUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: PlanoDeEstudosCreateOrConnectWithoutRegistrosInput
    upsert?: PlanoDeEstudosUpsertWithoutRegistrosInput
    disconnect?: PlanoDeEstudosWhereInput | boolean
    delete?: PlanoDeEstudosWhereInput | boolean
    connect?: PlanoDeEstudosWhereUniqueInput
    update?: XOR<XOR<PlanoDeEstudosUpdateToOneWithWhereWithoutRegistrosInput, PlanoDeEstudosUpdateWithoutRegistrosInput>, PlanoDeEstudosUncheckedUpdateWithoutRegistrosInput>
  }

  export type UserUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<UserCreateWithoutAgendamentosInput, UserUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgendamentosInput
    upsert?: UserUpsertWithoutAgendamentosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgendamentosInput, UserUpdateWithoutAgendamentosInput>, UserUncheckedUpdateWithoutAgendamentosInput>
  }

  export type DiaDisciplinaMateriaCreateNestedManyWithoutPlanoInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutPlanoInput, DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput> | DiaDisciplinaMateriaCreateWithoutPlanoInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput | DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput[]
    createMany?: DiaDisciplinaMateriaCreateManyPlanoInputEnvelope
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlanosDeEstudoInput = {
    create?: XOR<UserCreateWithoutPlanosDeEstudoInput, UserUncheckedCreateWithoutPlanosDeEstudoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlanosDeEstudoInput
    connect?: UserWhereUniqueInput
  }

  export type DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutPlanoInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutPlanoInput, DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput> | DiaDisciplinaMateriaCreateWithoutPlanoInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput | DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput[]
    createMany?: DiaDisciplinaMateriaCreateManyPlanoInputEnvelope
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DiaDisciplinaMateriaUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutPlanoInput, DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput> | DiaDisciplinaMateriaCreateWithoutPlanoInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput | DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput[]
    upsert?: DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutPlanoInput | DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: DiaDisciplinaMateriaCreateManyPlanoInputEnvelope
    set?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    disconnect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    delete?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    update?: DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutPlanoInput | DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: DiaDisciplinaMateriaUpdateManyWithWhereWithoutPlanoInput | DiaDisciplinaMateriaUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: DiaDisciplinaMateriaScalarWhereInput | DiaDisciplinaMateriaScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlanosDeEstudoNestedInput = {
    create?: XOR<UserCreateWithoutPlanosDeEstudoInput, UserUncheckedCreateWithoutPlanosDeEstudoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlanosDeEstudoInput
    upsert?: UserUpsertWithoutPlanosDeEstudoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlanosDeEstudoInput, UserUpdateWithoutPlanosDeEstudoInput>, UserUncheckedUpdateWithoutPlanosDeEstudoInput>
  }

  export type DiaDisciplinaMateriaUncheckedUpdateManyWithoutPlanoNestedInput = {
    create?: XOR<DiaDisciplinaMateriaCreateWithoutPlanoInput, DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput> | DiaDisciplinaMateriaCreateWithoutPlanoInput[] | DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput[]
    connectOrCreate?: DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput | DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput[]
    upsert?: DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutPlanoInput | DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutPlanoInput[]
    createMany?: DiaDisciplinaMateriaCreateManyPlanoInputEnvelope
    set?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    disconnect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    delete?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    connect?: DiaDisciplinaMateriaWhereUniqueInput | DiaDisciplinaMateriaWhereUniqueInput[]
    update?: DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutPlanoInput | DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutPlanoInput[]
    updateMany?: DiaDisciplinaMateriaUpdateManyWithWhereWithoutPlanoInput | DiaDisciplinaMateriaUpdateManyWithWhereWithoutPlanoInput[]
    deleteMany?: DiaDisciplinaMateriaScalarWhereInput | DiaDisciplinaMateriaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHistoricosEstudoInput = {
    create?: XOR<UserCreateWithoutHistoricosEstudoInput, UserUncheckedCreateWithoutHistoricosEstudoInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoricosEstudoInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHistoricosEstudoNestedInput = {
    create?: XOR<UserCreateWithoutHistoricosEstudoInput, UserUncheckedCreateWithoutHistoricosEstudoInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoricosEstudoInput
    upsert?: UserUpsertWithoutHistoricosEstudoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoricosEstudoInput, UserUpdateWithoutHistoricosEstudoInput>, UserUncheckedUpdateWithoutHistoricosEstudoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusConteudoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusConteudo | EnumStatusConteudoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusConteudo[] | ListEnumStatusConteudoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusConteudo[] | ListEnumStatusConteudoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusConteudoFilter<$PrismaModel> | $Enums.StatusConteudo
  }

  export type NestedEnumDisciplinaNomeFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplinaNome | EnumDisciplinaNomeFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplinaNome[] | ListEnumDisciplinaNomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplinaNome[] | ListEnumDisciplinaNomeFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplinaNomeFilter<$PrismaModel> | $Enums.DisciplinaNome
  }

  export type NestedEnumStatusConteudoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusConteudo | EnumStatusConteudoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusConteudo[] | ListEnumStatusConteudoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusConteudo[] | ListEnumStatusConteudoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusConteudoWithAggregatesFilter<$PrismaModel> | $Enums.StatusConteudo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusConteudoFilter<$PrismaModel>
    _max?: NestedEnumStatusConteudoFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDisciplinaNomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplinaNome | EnumDisciplinaNomeFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplinaNome[] | ListEnumDisciplinaNomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplinaNome[] | ListEnumDisciplinaNomeFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplinaNomeWithAggregatesFilter<$PrismaModel> | $Enums.DisciplinaNome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisciplinaNomeFilter<$PrismaModel>
    _max?: NestedEnumDisciplinaNomeFilter<$PrismaModel>
  }

  export type NestedEnumDiaDaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaDaSemana | EnumDiaDaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaDaSemana[] | ListEnumDiaDaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaDaSemana[] | ListEnumDiaDaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaDaSemanaFilter<$PrismaModel> | $Enums.DiaDaSemana
  }

  export type NestedEnumDiaDaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaDaSemana | EnumDiaDaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaDaSemana[] | ListEnumDiaDaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaDaSemana[] | ListEnumDiaDaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaDaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaDaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaDaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaDaSemanaFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MateriaCreateWithoutUserInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status?: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    agendamentos?: DiaDisciplinaMateriaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutUserInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status?: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    agendamentos?: DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutUserInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutUserInput, MateriaUncheckedCreateWithoutUserInput>
  }

  export type MateriaCreateManyUserInputEnvelope = {
    data: MateriaCreateManyUserInput | MateriaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiaDisciplinaMateriaCreateWithoutUserInput = {
    id?: string
    dia: $Enums.DiaDaSemana
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    materia: MateriaCreateNestedOneWithoutAgendamentosInput
    plano?: PlanoDeEstudosCreateNestedOneWithoutRegistrosInput
  }

  export type DiaDisciplinaMateriaUncheckedCreateWithoutUserInput = {
    id?: string
    dia: $Enums.DiaDaSemana
    materiaId: string
    planoId?: string | null
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaDisciplinaMateriaCreateOrConnectWithoutUserInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    create: XOR<DiaDisciplinaMateriaCreateWithoutUserInput, DiaDisciplinaMateriaUncheckedCreateWithoutUserInput>
  }

  export type DiaDisciplinaMateriaCreateManyUserInputEnvelope = {
    data: DiaDisciplinaMateriaCreateManyUserInput | DiaDisciplinaMateriaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlanoDeEstudosCreateWithoutUserInput = {
    id?: string
    titulo: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    progressoGeral?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    registros?: DiaDisciplinaMateriaCreateNestedManyWithoutPlanoInput
  }

  export type PlanoDeEstudosUncheckedCreateWithoutUserInput = {
    id?: string
    titulo: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    progressoGeral?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    registros?: DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutPlanoInput
  }

  export type PlanoDeEstudosCreateOrConnectWithoutUserInput = {
    where: PlanoDeEstudosWhereUniqueInput
    create: XOR<PlanoDeEstudosCreateWithoutUserInput, PlanoDeEstudosUncheckedCreateWithoutUserInput>
  }

  export type PlanoDeEstudosCreateManyUserInputEnvelope = {
    data: PlanoDeEstudosCreateManyUserInput | PlanoDeEstudosCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoEstudoCreateWithoutUserInput = {
    id?: string
    tituloDaMateria: string
    disciplina: $Enums.DisciplinaNome
    dataEstudo: Date | string
    tempoEstudado: number
    anotacoes?: string | null
    progresso?: number
    planoId?: string | null
    criadoEm?: Date | string
  }

  export type HistoricoEstudoUncheckedCreateWithoutUserInput = {
    id?: string
    tituloDaMateria: string
    disciplina: $Enums.DisciplinaNome
    dataEstudo: Date | string
    tempoEstudado: number
    anotacoes?: string | null
    progresso?: number
    planoId?: string | null
    criadoEm?: Date | string
  }

  export type HistoricoEstudoCreateOrConnectWithoutUserInput = {
    where: HistoricoEstudoWhereUniqueInput
    create: XOR<HistoricoEstudoCreateWithoutUserInput, HistoricoEstudoUncheckedCreateWithoutUserInput>
  }

  export type HistoricoEstudoCreateManyUserInputEnvelope = {
    data: HistoricoEstudoCreateManyUserInput | HistoricoEstudoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MateriaUpsertWithWhereUniqueWithoutUserInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutUserInput, MateriaUncheckedUpdateWithoutUserInput>
    create: XOR<MateriaCreateWithoutUserInput, MateriaUncheckedCreateWithoutUserInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutUserInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutUserInput, MateriaUncheckedUpdateWithoutUserInput>
  }

  export type MateriaUpdateManyWithWhereWithoutUserInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutUserInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id?: StringFilter<"Materia"> | string
    userId?: StringFilter<"Materia"> | string
    titulo?: StringFilter<"Materia"> | string
    descricao?: StringNullableFilter<"Materia"> | string | null
    status?: EnumStatusConteudoFilter<"Materia"> | $Enums.StatusConteudo
    ordem?: IntFilter<"Materia"> | number
    disciplina?: EnumDisciplinaNomeFilter<"Materia"> | $Enums.DisciplinaNome
    criadoEm?: DateTimeFilter<"Materia"> | Date | string
    atualizadoEm?: DateTimeFilter<"Materia"> | Date | string
  }

  export type DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutUserInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    update: XOR<DiaDisciplinaMateriaUpdateWithoutUserInput, DiaDisciplinaMateriaUncheckedUpdateWithoutUserInput>
    create: XOR<DiaDisciplinaMateriaCreateWithoutUserInput, DiaDisciplinaMateriaUncheckedCreateWithoutUserInput>
  }

  export type DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutUserInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    data: XOR<DiaDisciplinaMateriaUpdateWithoutUserInput, DiaDisciplinaMateriaUncheckedUpdateWithoutUserInput>
  }

  export type DiaDisciplinaMateriaUpdateManyWithWhereWithoutUserInput = {
    where: DiaDisciplinaMateriaScalarWhereInput
    data: XOR<DiaDisciplinaMateriaUpdateManyMutationInput, DiaDisciplinaMateriaUncheckedUpdateManyWithoutUserInput>
  }

  export type DiaDisciplinaMateriaScalarWhereInput = {
    AND?: DiaDisciplinaMateriaScalarWhereInput | DiaDisciplinaMateriaScalarWhereInput[]
    OR?: DiaDisciplinaMateriaScalarWhereInput[]
    NOT?: DiaDisciplinaMateriaScalarWhereInput | DiaDisciplinaMateriaScalarWhereInput[]
    id?: StringFilter<"DiaDisciplinaMateria"> | string
    userId?: StringFilter<"DiaDisciplinaMateria"> | string
    dia?: EnumDiaDaSemanaFilter<"DiaDisciplinaMateria"> | $Enums.DiaDaSemana
    materiaId?: StringFilter<"DiaDisciplinaMateria"> | string
    planoId?: StringNullableFilter<"DiaDisciplinaMateria"> | string | null
    status?: EnumStatusConteudoFilter<"DiaDisciplinaMateria"> | $Enums.StatusConteudo
    tempoEstudado?: IntNullableFilter<"DiaDisciplinaMateria"> | number | null
    anotacoes?: StringNullableFilter<"DiaDisciplinaMateria"> | string | null
    progresso?: IntFilter<"DiaDisciplinaMateria"> | number
    criadoEm?: DateTimeFilter<"DiaDisciplinaMateria"> | Date | string
    atualizadoEm?: DateTimeFilter<"DiaDisciplinaMateria"> | Date | string
  }

  export type PlanoDeEstudosUpsertWithWhereUniqueWithoutUserInput = {
    where: PlanoDeEstudosWhereUniqueInput
    update: XOR<PlanoDeEstudosUpdateWithoutUserInput, PlanoDeEstudosUncheckedUpdateWithoutUserInput>
    create: XOR<PlanoDeEstudosCreateWithoutUserInput, PlanoDeEstudosUncheckedCreateWithoutUserInput>
  }

  export type PlanoDeEstudosUpdateWithWhereUniqueWithoutUserInput = {
    where: PlanoDeEstudosWhereUniqueInput
    data: XOR<PlanoDeEstudosUpdateWithoutUserInput, PlanoDeEstudosUncheckedUpdateWithoutUserInput>
  }

  export type PlanoDeEstudosUpdateManyWithWhereWithoutUserInput = {
    where: PlanoDeEstudosScalarWhereInput
    data: XOR<PlanoDeEstudosUpdateManyMutationInput, PlanoDeEstudosUncheckedUpdateManyWithoutUserInput>
  }

  export type PlanoDeEstudosScalarWhereInput = {
    AND?: PlanoDeEstudosScalarWhereInput | PlanoDeEstudosScalarWhereInput[]
    OR?: PlanoDeEstudosScalarWhereInput[]
    NOT?: PlanoDeEstudosScalarWhereInput | PlanoDeEstudosScalarWhereInput[]
    id?: StringFilter<"PlanoDeEstudos"> | string
    userId?: StringFilter<"PlanoDeEstudos"> | string
    titulo?: StringFilter<"PlanoDeEstudos"> | string
    dataInicio?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
    dataFim?: DateTimeNullableFilter<"PlanoDeEstudos"> | Date | string | null
    ativo?: BoolFilter<"PlanoDeEstudos"> | boolean
    progressoGeral?: IntFilter<"PlanoDeEstudos"> | number
    criadoEm?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
    atualizadoEm?: DateTimeFilter<"PlanoDeEstudos"> | Date | string
  }

  export type HistoricoEstudoUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoricoEstudoWhereUniqueInput
    update: XOR<HistoricoEstudoUpdateWithoutUserInput, HistoricoEstudoUncheckedUpdateWithoutUserInput>
    create: XOR<HistoricoEstudoCreateWithoutUserInput, HistoricoEstudoUncheckedCreateWithoutUserInput>
  }

  export type HistoricoEstudoUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoricoEstudoWhereUniqueInput
    data: XOR<HistoricoEstudoUpdateWithoutUserInput, HistoricoEstudoUncheckedUpdateWithoutUserInput>
  }

  export type HistoricoEstudoUpdateManyWithWhereWithoutUserInput = {
    where: HistoricoEstudoScalarWhereInput
    data: XOR<HistoricoEstudoUpdateManyMutationInput, HistoricoEstudoUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoricoEstudoScalarWhereInput = {
    AND?: HistoricoEstudoScalarWhereInput | HistoricoEstudoScalarWhereInput[]
    OR?: HistoricoEstudoScalarWhereInput[]
    NOT?: HistoricoEstudoScalarWhereInput | HistoricoEstudoScalarWhereInput[]
    id?: StringFilter<"HistoricoEstudo"> | string
    userId?: StringFilter<"HistoricoEstudo"> | string
    tituloDaMateria?: StringFilter<"HistoricoEstudo"> | string
    disciplina?: EnumDisciplinaNomeFilter<"HistoricoEstudo"> | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFilter<"HistoricoEstudo"> | Date | string
    tempoEstudado?: IntFilter<"HistoricoEstudo"> | number
    anotacoes?: StringNullableFilter<"HistoricoEstudo"> | string | null
    progresso?: IntFilter<"HistoricoEstudo"> | number
    planoId?: StringNullableFilter<"HistoricoEstudo"> | string | null
    criadoEm?: DateTimeFilter<"HistoricoEstudo"> | Date | string
  }

  export type UserCreateWithoutMateriasInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: DiaDisciplinaMateriaCreateNestedManyWithoutUserInput
    planosDeEstudo?: PlanoDeEstudosCreateNestedManyWithoutUserInput
    historicosEstudo?: HistoricoEstudoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMateriasInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutUserInput
    planosDeEstudo?: PlanoDeEstudosUncheckedCreateNestedManyWithoutUserInput
    historicosEstudo?: HistoricoEstudoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMateriasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMateriasInput, UserUncheckedCreateWithoutMateriasInput>
  }

  export type DiaDisciplinaMateriaCreateWithoutMateriaInput = {
    id?: string
    dia: $Enums.DiaDaSemana
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    plano?: PlanoDeEstudosCreateNestedOneWithoutRegistrosInput
    user: UserCreateNestedOneWithoutAgendamentosInput
  }

  export type DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput = {
    id?: string
    userId: string
    dia: $Enums.DiaDaSemana
    planoId?: string | null
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaDisciplinaMateriaCreateOrConnectWithoutMateriaInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    create: XOR<DiaDisciplinaMateriaCreateWithoutMateriaInput, DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput>
  }

  export type DiaDisciplinaMateriaCreateManyMateriaInputEnvelope = {
    data: DiaDisciplinaMateriaCreateManyMateriaInput | DiaDisciplinaMateriaCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMateriasInput = {
    update: XOR<UserUpdateWithoutMateriasInput, UserUncheckedUpdateWithoutMateriasInput>
    create: XOR<UserCreateWithoutMateriasInput, UserUncheckedCreateWithoutMateriasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMateriasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMateriasInput, UserUncheckedUpdateWithoutMateriasInput>
  }

  export type UserUpdateWithoutMateriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: DiaDisciplinaMateriaUpdateManyWithoutUserNestedInput
    planosDeEstudo?: PlanoDeEstudosUpdateManyWithoutUserNestedInput
    historicosEstudo?: HistoricoEstudoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMateriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: DiaDisciplinaMateriaUncheckedUpdateManyWithoutUserNestedInput
    planosDeEstudo?: PlanoDeEstudosUncheckedUpdateManyWithoutUserNestedInput
    historicosEstudo?: HistoricoEstudoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutMateriaInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    update: XOR<DiaDisciplinaMateriaUpdateWithoutMateriaInput, DiaDisciplinaMateriaUncheckedUpdateWithoutMateriaInput>
    create: XOR<DiaDisciplinaMateriaCreateWithoutMateriaInput, DiaDisciplinaMateriaUncheckedCreateWithoutMateriaInput>
  }

  export type DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutMateriaInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    data: XOR<DiaDisciplinaMateriaUpdateWithoutMateriaInput, DiaDisciplinaMateriaUncheckedUpdateWithoutMateriaInput>
  }

  export type DiaDisciplinaMateriaUpdateManyWithWhereWithoutMateriaInput = {
    where: DiaDisciplinaMateriaScalarWhereInput
    data: XOR<DiaDisciplinaMateriaUpdateManyMutationInput, DiaDisciplinaMateriaUncheckedUpdateManyWithoutMateriaInput>
  }

  export type MateriaCreateWithoutAgendamentosInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status?: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    user: UserCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    userId: string
    titulo: string
    descricao?: string | null
    status?: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type MateriaCreateOrConnectWithoutAgendamentosInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutAgendamentosInput, MateriaUncheckedCreateWithoutAgendamentosInput>
  }

  export type PlanoDeEstudosCreateWithoutRegistrosInput = {
    id?: string
    titulo: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    progressoGeral?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    user: UserCreateNestedOneWithoutPlanosDeEstudoInput
  }

  export type PlanoDeEstudosUncheckedCreateWithoutRegistrosInput = {
    id?: string
    userId: string
    titulo: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    progressoGeral?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PlanoDeEstudosCreateOrConnectWithoutRegistrosInput = {
    where: PlanoDeEstudosWhereUniqueInput
    create: XOR<PlanoDeEstudosCreateWithoutRegistrosInput, PlanoDeEstudosUncheckedCreateWithoutRegistrosInput>
  }

  export type UserCreateWithoutAgendamentosInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materias?: MateriaCreateNestedManyWithoutUserInput
    planosDeEstudo?: PlanoDeEstudosCreateNestedManyWithoutUserInput
    historicosEstudo?: HistoricoEstudoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAgendamentosInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materias?: MateriaUncheckedCreateNestedManyWithoutUserInput
    planosDeEstudo?: PlanoDeEstudosUncheckedCreateNestedManyWithoutUserInput
    historicosEstudo?: HistoricoEstudoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgendamentosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgendamentosInput, UserUncheckedCreateWithoutAgendamentosInput>
  }

  export type MateriaUpsertWithoutAgendamentosInput = {
    update: XOR<MateriaUpdateWithoutAgendamentosInput, MateriaUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<MateriaCreateWithoutAgendamentosInput, MateriaUncheckedCreateWithoutAgendamentosInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutAgendamentosInput, MateriaUncheckedUpdateWithoutAgendamentosInput>
  }

  export type MateriaUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanoDeEstudosUpsertWithoutRegistrosInput = {
    update: XOR<PlanoDeEstudosUpdateWithoutRegistrosInput, PlanoDeEstudosUncheckedUpdateWithoutRegistrosInput>
    create: XOR<PlanoDeEstudosCreateWithoutRegistrosInput, PlanoDeEstudosUncheckedCreateWithoutRegistrosInput>
    where?: PlanoDeEstudosWhereInput
  }

  export type PlanoDeEstudosUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: PlanoDeEstudosWhereInput
    data: XOR<PlanoDeEstudosUpdateWithoutRegistrosInput, PlanoDeEstudosUncheckedUpdateWithoutRegistrosInput>
  }

  export type PlanoDeEstudosUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlanosDeEstudoNestedInput
  }

  export type PlanoDeEstudosUncheckedUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAgendamentosInput = {
    update: XOR<UserUpdateWithoutAgendamentosInput, UserUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<UserCreateWithoutAgendamentosInput, UserUncheckedCreateWithoutAgendamentosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgendamentosInput, UserUncheckedUpdateWithoutAgendamentosInput>
  }

  export type UserUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUpdateManyWithoutUserNestedInput
    planosDeEstudo?: PlanoDeEstudosUpdateManyWithoutUserNestedInput
    historicosEstudo?: HistoricoEstudoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUncheckedUpdateManyWithoutUserNestedInput
    planosDeEstudo?: PlanoDeEstudosUncheckedUpdateManyWithoutUserNestedInput
    historicosEstudo?: HistoricoEstudoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DiaDisciplinaMateriaCreateWithoutPlanoInput = {
    id?: string
    dia: $Enums.DiaDaSemana
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    materia: MateriaCreateNestedOneWithoutAgendamentosInput
    user: UserCreateNestedOneWithoutAgendamentosInput
  }

  export type DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput = {
    id?: string
    userId: string
    dia: $Enums.DiaDaSemana
    materiaId: string
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaDisciplinaMateriaCreateOrConnectWithoutPlanoInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    create: XOR<DiaDisciplinaMateriaCreateWithoutPlanoInput, DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput>
  }

  export type DiaDisciplinaMateriaCreateManyPlanoInputEnvelope = {
    data: DiaDisciplinaMateriaCreateManyPlanoInput | DiaDisciplinaMateriaCreateManyPlanoInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlanosDeEstudoInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materias?: MateriaCreateNestedManyWithoutUserInput
    agendamentos?: DiaDisciplinaMateriaCreateNestedManyWithoutUserInput
    historicosEstudo?: HistoricoEstudoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlanosDeEstudoInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materias?: MateriaUncheckedCreateNestedManyWithoutUserInput
    agendamentos?: DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutUserInput
    historicosEstudo?: HistoricoEstudoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlanosDeEstudoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlanosDeEstudoInput, UserUncheckedCreateWithoutPlanosDeEstudoInput>
  }

  export type DiaDisciplinaMateriaUpsertWithWhereUniqueWithoutPlanoInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    update: XOR<DiaDisciplinaMateriaUpdateWithoutPlanoInput, DiaDisciplinaMateriaUncheckedUpdateWithoutPlanoInput>
    create: XOR<DiaDisciplinaMateriaCreateWithoutPlanoInput, DiaDisciplinaMateriaUncheckedCreateWithoutPlanoInput>
  }

  export type DiaDisciplinaMateriaUpdateWithWhereUniqueWithoutPlanoInput = {
    where: DiaDisciplinaMateriaWhereUniqueInput
    data: XOR<DiaDisciplinaMateriaUpdateWithoutPlanoInput, DiaDisciplinaMateriaUncheckedUpdateWithoutPlanoInput>
  }

  export type DiaDisciplinaMateriaUpdateManyWithWhereWithoutPlanoInput = {
    where: DiaDisciplinaMateriaScalarWhereInput
    data: XOR<DiaDisciplinaMateriaUpdateManyMutationInput, DiaDisciplinaMateriaUncheckedUpdateManyWithoutPlanoInput>
  }

  export type UserUpsertWithoutPlanosDeEstudoInput = {
    update: XOR<UserUpdateWithoutPlanosDeEstudoInput, UserUncheckedUpdateWithoutPlanosDeEstudoInput>
    create: XOR<UserCreateWithoutPlanosDeEstudoInput, UserUncheckedCreateWithoutPlanosDeEstudoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlanosDeEstudoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlanosDeEstudoInput, UserUncheckedUpdateWithoutPlanosDeEstudoInput>
  }

  export type UserUpdateWithoutPlanosDeEstudoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUpdateManyWithoutUserNestedInput
    agendamentos?: DiaDisciplinaMateriaUpdateManyWithoutUserNestedInput
    historicosEstudo?: HistoricoEstudoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlanosDeEstudoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUncheckedUpdateManyWithoutUserNestedInput
    agendamentos?: DiaDisciplinaMateriaUncheckedUpdateManyWithoutUserNestedInput
    historicosEstudo?: HistoricoEstudoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHistoricosEstudoInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materias?: MateriaCreateNestedManyWithoutUserInput
    agendamentos?: DiaDisciplinaMateriaCreateNestedManyWithoutUserInput
    planosDeEstudo?: PlanoDeEstudosCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoricosEstudoInput = {
    id: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materias?: MateriaUncheckedCreateNestedManyWithoutUserInput
    agendamentos?: DiaDisciplinaMateriaUncheckedCreateNestedManyWithoutUserInput
    planosDeEstudo?: PlanoDeEstudosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoricosEstudoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoricosEstudoInput, UserUncheckedCreateWithoutHistoricosEstudoInput>
  }

  export type UserUpsertWithoutHistoricosEstudoInput = {
    update: XOR<UserUpdateWithoutHistoricosEstudoInput, UserUncheckedUpdateWithoutHistoricosEstudoInput>
    create: XOR<UserCreateWithoutHistoricosEstudoInput, UserUncheckedCreateWithoutHistoricosEstudoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoricosEstudoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoricosEstudoInput, UserUncheckedUpdateWithoutHistoricosEstudoInput>
  }

  export type UserUpdateWithoutHistoricosEstudoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUpdateManyWithoutUserNestedInput
    agendamentos?: DiaDisciplinaMateriaUpdateManyWithoutUserNestedInput
    planosDeEstudo?: PlanoDeEstudosUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoricosEstudoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materias?: MateriaUncheckedUpdateManyWithoutUserNestedInput
    agendamentos?: DiaDisciplinaMateriaUncheckedUpdateManyWithoutUserNestedInput
    planosDeEstudo?: PlanoDeEstudosUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MateriaCreateManyUserInput = {
    id?: string
    titulo: string
    descricao?: string | null
    status?: $Enums.StatusConteudo
    ordem: number
    disciplina: $Enums.DisciplinaNome
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaDisciplinaMateriaCreateManyUserInput = {
    id?: string
    dia: $Enums.DiaDaSemana
    materiaId: string
    planoId?: string | null
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PlanoDeEstudosCreateManyUserInput = {
    id?: string
    titulo: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    ativo?: boolean
    progressoGeral?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type HistoricoEstudoCreateManyUserInput = {
    id?: string
    tituloDaMateria: string
    disciplina: $Enums.DisciplinaNome
    dataEstudo: Date | string
    tempoEstudado: number
    anotacoes?: string | null
    progresso?: number
    planoId?: string | null
    criadoEm?: Date | string
  }

  export type MateriaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: DiaDisciplinaMateriaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: DiaDisciplinaMateriaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    ordem?: IntFieldUpdateOperationsInput | number
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneRequiredWithoutAgendamentosNestedInput
    plano?: PlanoDeEstudosUpdateOneWithoutRegistrosNestedInput
  }

  export type DiaDisciplinaMateriaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    materiaId?: StringFieldUpdateOperationsInput | string
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    materiaId?: StringFieldUpdateOperationsInput | string
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanoDeEstudosUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: DiaDisciplinaMateriaUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoDeEstudosUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    registros?: DiaDisciplinaMateriaUncheckedUpdateManyWithoutPlanoNestedInput
  }

  export type PlanoDeEstudosUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    progressoGeral?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoEstudoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tituloDaMateria?: StringFieldUpdateOperationsInput | string
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFieldUpdateOperationsInput | Date | string
    tempoEstudado?: IntFieldUpdateOperationsInput | number
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoEstudoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tituloDaMateria?: StringFieldUpdateOperationsInput | string
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFieldUpdateOperationsInput | Date | string
    tempoEstudado?: IntFieldUpdateOperationsInput | number
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoEstudoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tituloDaMateria?: StringFieldUpdateOperationsInput | string
    disciplina?: EnumDisciplinaNomeFieldUpdateOperationsInput | $Enums.DisciplinaNome
    dataEstudo?: DateTimeFieldUpdateOperationsInput | Date | string
    tempoEstudado?: IntFieldUpdateOperationsInput | number
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaCreateManyMateriaInput = {
    id?: string
    userId: string
    dia: $Enums.DiaDaSemana
    planoId?: string | null
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaDisciplinaMateriaUpdateWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    plano?: PlanoDeEstudosUpdateOneWithoutRegistrosNestedInput
    user?: UserUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type DiaDisciplinaMateriaUncheckedUpdateWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaUncheckedUpdateManyWithoutMateriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    planoId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaCreateManyPlanoInput = {
    id?: string
    userId: string
    dia: $Enums.DiaDaSemana
    materiaId: string
    status?: $Enums.StatusConteudo
    tempoEstudado?: number | null
    anotacoes?: string | null
    progresso?: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type DiaDisciplinaMateriaUpdateWithoutPlanoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    materia?: MateriaUpdateOneRequiredWithoutAgendamentosNestedInput
    user?: UserUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type DiaDisciplinaMateriaUncheckedUpdateWithoutPlanoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    materiaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaDisciplinaMateriaUncheckedUpdateManyWithoutPlanoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dia?: EnumDiaDaSemanaFieldUpdateOperationsInput | $Enums.DiaDaSemana
    materiaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusConteudoFieldUpdateOperationsInput | $Enums.StatusConteudo
    tempoEstudado?: NullableIntFieldUpdateOperationsInput | number | null
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    progresso?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}