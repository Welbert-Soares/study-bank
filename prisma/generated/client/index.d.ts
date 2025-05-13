
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
 * Model DailyDashboard
 * 
 */
export type DailyDashboard = $Result.DefaultSelection<Prisma.$DailyDashboardPayload>
/**
 * Model Objetivo
 * 
 */
export type Objetivo = $Result.DefaultSelection<Prisma.$ObjetivoPayload>
/**
 * Model Atividade
 * 
 */
export type Atividade = $Result.DefaultSelection<Prisma.$AtividadePayload>
/**
 * Model MetricaDisciplina
 * 
 */
export type MetricaDisciplina = $Result.DefaultSelection<Prisma.$MetricaDisciplinaPayload>
/**
 * Model HistoricoProgresso
 * 
 */
export type HistoricoProgresso = $Result.DefaultSelection<Prisma.$HistoricoProgressoPayload>
/**
 * Model Disciplina
 * 
 */
export type Disciplina = $Result.DefaultSelection<Prisma.$DisciplinaPayload>
/**
 * Model Conteudo
 * 
 */
export type Conteudo = $Result.DefaultSelection<Prisma.$ConteudoPayload>
/**
 * Model HorarioEstudo
 * 
 */
export type HorarioEstudo = $Result.DefaultSelection<Prisma.$HorarioEstudoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AtividadeStatus: {
  completed: 'completed',
  in_progress: 'in_progress',
  pending: 'pending'
};

export type AtividadeStatus = (typeof AtividadeStatus)[keyof typeof AtividadeStatus]

}

export type AtividadeStatus = $Enums.AtividadeStatus

export const AtividadeStatus: typeof $Enums.AtividadeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DailyDashboards
 * const dailyDashboards = await prisma.dailyDashboard.findMany()
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
   * // Fetch zero or more DailyDashboards
   * const dailyDashboards = await prisma.dailyDashboard.findMany()
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
   * `prisma.dailyDashboard`: Exposes CRUD operations for the **DailyDashboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyDashboards
    * const dailyDashboards = await prisma.dailyDashboard.findMany()
    * ```
    */
  get dailyDashboard(): Prisma.DailyDashboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objetivo`: Exposes CRUD operations for the **Objetivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Objetivos
    * const objetivos = await prisma.objetivo.findMany()
    * ```
    */
  get objetivo(): Prisma.ObjetivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atividade`: Exposes CRUD operations for the **Atividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividades
    * const atividades = await prisma.atividade.findMany()
    * ```
    */
  get atividade(): Prisma.AtividadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metricaDisciplina`: Exposes CRUD operations for the **MetricaDisciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetricaDisciplinas
    * const metricaDisciplinas = await prisma.metricaDisciplina.findMany()
    * ```
    */
  get metricaDisciplina(): Prisma.MetricaDisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoProgresso`: Exposes CRUD operations for the **HistoricoProgresso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoProgressos
    * const historicoProgressos = await prisma.historicoProgresso.findMany()
    * ```
    */
  get historicoProgresso(): Prisma.HistoricoProgressoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **Disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.DisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conteudo`: Exposes CRUD operations for the **Conteudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conteudos
    * const conteudos = await prisma.conteudo.findMany()
    * ```
    */
  get conteudo(): Prisma.ConteudoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarioEstudo`: Exposes CRUD operations for the **HorarioEstudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorarioEstudos
    * const horarioEstudos = await prisma.horarioEstudo.findMany()
    * ```
    */
  get horarioEstudo(): Prisma.HorarioEstudoDelegate<ExtArgs, ClientOptions>;
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
    DailyDashboard: 'DailyDashboard',
    Objetivo: 'Objetivo',
    Atividade: 'Atividade',
    MetricaDisciplina: 'MetricaDisciplina',
    HistoricoProgresso: 'HistoricoProgresso',
    Disciplina: 'Disciplina',
    Conteudo: 'Conteudo',
    HorarioEstudo: 'HorarioEstudo'
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
      modelProps: "dailyDashboard" | "objetivo" | "atividade" | "metricaDisciplina" | "historicoProgresso" | "disciplina" | "conteudo" | "horarioEstudo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DailyDashboard: {
        payload: Prisma.$DailyDashboardPayload<ExtArgs>
        fields: Prisma.DailyDashboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyDashboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyDashboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>
          }
          findFirst: {
            args: Prisma.DailyDashboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyDashboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>
          }
          findMany: {
            args: Prisma.DailyDashboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>[]
          }
          create: {
            args: Prisma.DailyDashboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>
          }
          createMany: {
            args: Prisma.DailyDashboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyDashboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>[]
          }
          delete: {
            args: Prisma.DailyDashboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>
          }
          update: {
            args: Prisma.DailyDashboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>
          }
          deleteMany: {
            args: Prisma.DailyDashboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyDashboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyDashboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>[]
          }
          upsert: {
            args: Prisma.DailyDashboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyDashboardPayload>
          }
          aggregate: {
            args: Prisma.DailyDashboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyDashboard>
          }
          groupBy: {
            args: Prisma.DailyDashboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyDashboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyDashboardCountArgs<ExtArgs>
            result: $Utils.Optional<DailyDashboardCountAggregateOutputType> | number
          }
        }
      }
      Objetivo: {
        payload: Prisma.$ObjetivoPayload<ExtArgs>
        fields: Prisma.ObjetivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjetivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjetivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>
          }
          findFirst: {
            args: Prisma.ObjetivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjetivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>
          }
          findMany: {
            args: Prisma.ObjetivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>[]
          }
          create: {
            args: Prisma.ObjetivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>
          }
          createMany: {
            args: Prisma.ObjetivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjetivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>[]
          }
          delete: {
            args: Prisma.ObjetivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>
          }
          update: {
            args: Prisma.ObjetivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>
          }
          deleteMany: {
            args: Prisma.ObjetivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjetivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjetivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>[]
          }
          upsert: {
            args: Prisma.ObjetivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivoPayload>
          }
          aggregate: {
            args: Prisma.ObjetivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjetivo>
          }
          groupBy: {
            args: Prisma.ObjetivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjetivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjetivoCountArgs<ExtArgs>
            result: $Utils.Optional<ObjetivoCountAggregateOutputType> | number
          }
        }
      }
      Atividade: {
        payload: Prisma.$AtividadePayload<ExtArgs>
        fields: Prisma.AtividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findFirst: {
            args: Prisma.AtividadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findMany: {
            args: Prisma.AtividadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          create: {
            args: Prisma.AtividadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          createMany: {
            args: Prisma.AtividadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtividadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          delete: {
            args: Prisma.AtividadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          update: {
            args: Prisma.AtividadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          deleteMany: {
            args: Prisma.AtividadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtividadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          upsert: {
            args: Prisma.AtividadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          aggregate: {
            args: Prisma.AtividadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividade>
          }
          groupBy: {
            args: Prisma.AtividadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeCountAggregateOutputType> | number
          }
        }
      }
      MetricaDisciplina: {
        payload: Prisma.$MetricaDisciplinaPayload<ExtArgs>
        fields: Prisma.MetricaDisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricaDisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricaDisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>
          }
          findFirst: {
            args: Prisma.MetricaDisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricaDisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>
          }
          findMany: {
            args: Prisma.MetricaDisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>[]
          }
          create: {
            args: Prisma.MetricaDisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>
          }
          createMany: {
            args: Prisma.MetricaDisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricaDisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>[]
          }
          delete: {
            args: Prisma.MetricaDisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>
          }
          update: {
            args: Prisma.MetricaDisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.MetricaDisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricaDisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricaDisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.MetricaDisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaDisciplinaPayload>
          }
          aggregate: {
            args: Prisma.MetricaDisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetricaDisciplina>
          }
          groupBy: {
            args: Prisma.MetricaDisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricaDisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricaDisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<MetricaDisciplinaCountAggregateOutputType> | number
          }
        }
      }
      HistoricoProgresso: {
        payload: Prisma.$HistoricoProgressoPayload<ExtArgs>
        fields: Prisma.HistoricoProgressoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoProgressoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoProgressoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoProgressoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoProgressoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>
          }
          findMany: {
            args: Prisma.HistoricoProgressoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>[]
          }
          create: {
            args: Prisma.HistoricoProgressoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>
          }
          createMany: {
            args: Prisma.HistoricoProgressoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoProgressoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>[]
          }
          delete: {
            args: Prisma.HistoricoProgressoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>
          }
          update: {
            args: Prisma.HistoricoProgressoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoProgressoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoProgressoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoProgressoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoProgressoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoProgressoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoProgressoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoProgresso>
          }
          groupBy: {
            args: Prisma.HistoricoProgressoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoProgressoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoProgressoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoProgressoCountAggregateOutputType> | number
          }
        }
      }
      Disciplina: {
        payload: Prisma.$DisciplinaPayload<ExtArgs>
        fields: Prisma.DisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findFirst: {
            args: Prisma.DisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findMany: {
            args: Prisma.DisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          create: {
            args: Prisma.DisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          createMany: {
            args: Prisma.DisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          delete: {
            args: Prisma.DisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          update: {
            args: Prisma.DisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.DisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.DisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      Conteudo: {
        payload: Prisma.$ConteudoPayload<ExtArgs>
        fields: Prisma.ConteudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConteudoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConteudoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          findFirst: {
            args: Prisma.ConteudoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConteudoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          findMany: {
            args: Prisma.ConteudoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>[]
          }
          create: {
            args: Prisma.ConteudoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          createMany: {
            args: Prisma.ConteudoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConteudoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>[]
          }
          delete: {
            args: Prisma.ConteudoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          update: {
            args: Prisma.ConteudoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          deleteMany: {
            args: Prisma.ConteudoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConteudoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConteudoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>[]
          }
          upsert: {
            args: Prisma.ConteudoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          aggregate: {
            args: Prisma.ConteudoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConteudo>
          }
          groupBy: {
            args: Prisma.ConteudoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConteudoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConteudoCountArgs<ExtArgs>
            result: $Utils.Optional<ConteudoCountAggregateOutputType> | number
          }
        }
      }
      HorarioEstudo: {
        payload: Prisma.$HorarioEstudoPayload<ExtArgs>
        fields: Prisma.HorarioEstudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioEstudoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioEstudoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>
          }
          findFirst: {
            args: Prisma.HorarioEstudoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioEstudoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>
          }
          findMany: {
            args: Prisma.HorarioEstudoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>[]
          }
          create: {
            args: Prisma.HorarioEstudoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>
          }
          createMany: {
            args: Prisma.HorarioEstudoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorarioEstudoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>[]
          }
          delete: {
            args: Prisma.HorarioEstudoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>
          }
          update: {
            args: Prisma.HorarioEstudoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>
          }
          deleteMany: {
            args: Prisma.HorarioEstudoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioEstudoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorarioEstudoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>[]
          }
          upsert: {
            args: Prisma.HorarioEstudoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioEstudoPayload>
          }
          aggregate: {
            args: Prisma.HorarioEstudoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarioEstudo>
          }
          groupBy: {
            args: Prisma.HorarioEstudoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioEstudoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorarioEstudoCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioEstudoCountAggregateOutputType> | number
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
    dailyDashboard?: DailyDashboardOmit
    objetivo?: ObjetivoOmit
    atividade?: AtividadeOmit
    metricaDisciplina?: MetricaDisciplinaOmit
    historicoProgresso?: HistoricoProgressoOmit
    disciplina?: DisciplinaOmit
    conteudo?: ConteudoOmit
    horarioEstudo?: HorarioEstudoOmit
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
   * Count Type DailyDashboardCountOutputType
   */

  export type DailyDashboardCountOutputType = {
    objetivos: number
    cronograma: number
    metricas: number
  }

  export type DailyDashboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objetivos?: boolean | DailyDashboardCountOutputTypeCountObjetivosArgs
    cronograma?: boolean | DailyDashboardCountOutputTypeCountCronogramaArgs
    metricas?: boolean | DailyDashboardCountOutputTypeCountMetricasArgs
  }

  // Custom InputTypes
  /**
   * DailyDashboardCountOutputType without action
   */
  export type DailyDashboardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboardCountOutputType
     */
    select?: DailyDashboardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyDashboardCountOutputType without action
   */
  export type DailyDashboardCountOutputTypeCountObjetivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetivoWhereInput
  }

  /**
   * DailyDashboardCountOutputType without action
   */
  export type DailyDashboardCountOutputTypeCountCronogramaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }

  /**
   * DailyDashboardCountOutputType without action
   */
  export type DailyDashboardCountOutputTypeCountMetricasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricaDisciplinaWhereInput
  }


  /**
   * Count Type MetricaDisciplinaCountOutputType
   */

  export type MetricaDisciplinaCountOutputType = {
    historico: number
  }

  export type MetricaDisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | MetricaDisciplinaCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * MetricaDisciplinaCountOutputType without action
   */
  export type MetricaDisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplinaCountOutputType
     */
    select?: MetricaDisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetricaDisciplinaCountOutputType without action
   */
  export type MetricaDisciplinaCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoProgressoWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    conteudos: number
    metricas: number
    atividades: number
    horarios: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conteudos?: boolean | DisciplinaCountOutputTypeCountConteudosArgs
    metricas?: boolean | DisciplinaCountOutputTypeCountMetricasArgs
    atividades?: boolean | DisciplinaCountOutputTypeCountAtividadesArgs
    horarios?: boolean | DisciplinaCountOutputTypeCountHorariosArgs
  }

  // Custom InputTypes
  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinaCountOutputType
     */
    select?: DisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountConteudosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConteudoWhereInput
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountMetricasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricaDisciplinaWhereInput
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioEstudoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DailyDashboard
   */

  export type AggregateDailyDashboard = {
    _count: DailyDashboardCountAggregateOutputType | null
    _min: DailyDashboardMinAggregateOutputType | null
    _max: DailyDashboardMaxAggregateOutputType | null
  }

  export type DailyDashboardMinAggregateOutputType = {
    id: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyDashboardMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyDashboardCountAggregateOutputType = {
    id: number
    date: number
    createdAt: number
    updatedAt: number
    proximosConteudos: number
    _all: number
  }


  export type DailyDashboardMinAggregateInputType = {
    id?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyDashboardMaxAggregateInputType = {
    id?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyDashboardCountAggregateInputType = {
    id?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    proximosConteudos?: true
    _all?: true
  }

  export type DailyDashboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyDashboard to aggregate.
     */
    where?: DailyDashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyDashboards to fetch.
     */
    orderBy?: DailyDashboardOrderByWithRelationInput | DailyDashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyDashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyDashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyDashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyDashboards
    **/
    _count?: true | DailyDashboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyDashboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyDashboardMaxAggregateInputType
  }

  export type GetDailyDashboardAggregateType<T extends DailyDashboardAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyDashboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyDashboard[P]>
      : GetScalarType<T[P], AggregateDailyDashboard[P]>
  }




  export type DailyDashboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyDashboardWhereInput
    orderBy?: DailyDashboardOrderByWithAggregationInput | DailyDashboardOrderByWithAggregationInput[]
    by: DailyDashboardScalarFieldEnum[] | DailyDashboardScalarFieldEnum
    having?: DailyDashboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyDashboardCountAggregateInputType | true
    _min?: DailyDashboardMinAggregateInputType
    _max?: DailyDashboardMaxAggregateInputType
  }

  export type DailyDashboardGroupByOutputType = {
    id: string
    date: Date
    createdAt: Date
    updatedAt: Date
    proximosConteudos: string[]
    _count: DailyDashboardCountAggregateOutputType | null
    _min: DailyDashboardMinAggregateOutputType | null
    _max: DailyDashboardMaxAggregateOutputType | null
  }

  type GetDailyDashboardGroupByPayload<T extends DailyDashboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyDashboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyDashboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyDashboardGroupByOutputType[P]>
            : GetScalarType<T[P], DailyDashboardGroupByOutputType[P]>
        }
      >
    >


  export type DailyDashboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    proximosConteudos?: boolean
    objetivos?: boolean | DailyDashboard$objetivosArgs<ExtArgs>
    cronograma?: boolean | DailyDashboard$cronogramaArgs<ExtArgs>
    metricas?: boolean | DailyDashboard$metricasArgs<ExtArgs>
    _count?: boolean | DailyDashboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyDashboard"]>

  export type DailyDashboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    proximosConteudos?: boolean
  }, ExtArgs["result"]["dailyDashboard"]>

  export type DailyDashboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    proximosConteudos?: boolean
  }, ExtArgs["result"]["dailyDashboard"]>

  export type DailyDashboardSelectScalar = {
    id?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    proximosConteudos?: boolean
  }

  export type DailyDashboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "createdAt" | "updatedAt" | "proximosConteudos", ExtArgs["result"]["dailyDashboard"]>
  export type DailyDashboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objetivos?: boolean | DailyDashboard$objetivosArgs<ExtArgs>
    cronograma?: boolean | DailyDashboard$cronogramaArgs<ExtArgs>
    metricas?: boolean | DailyDashboard$metricasArgs<ExtArgs>
    _count?: boolean | DailyDashboardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyDashboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DailyDashboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DailyDashboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyDashboard"
    objects: {
      objetivos: Prisma.$ObjetivoPayload<ExtArgs>[]
      cronograma: Prisma.$AtividadePayload<ExtArgs>[]
      metricas: Prisma.$MetricaDisciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      createdAt: Date
      updatedAt: Date
      proximosConteudos: string[]
    }, ExtArgs["result"]["dailyDashboard"]>
    composites: {}
  }

  type DailyDashboardGetPayload<S extends boolean | null | undefined | DailyDashboardDefaultArgs> = $Result.GetResult<Prisma.$DailyDashboardPayload, S>

  type DailyDashboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyDashboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyDashboardCountAggregateInputType | true
    }

  export interface DailyDashboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyDashboard'], meta: { name: 'DailyDashboard' } }
    /**
     * Find zero or one DailyDashboard that matches the filter.
     * @param {DailyDashboardFindUniqueArgs} args - Arguments to find a DailyDashboard
     * @example
     * // Get one DailyDashboard
     * const dailyDashboard = await prisma.dailyDashboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyDashboardFindUniqueArgs>(args: SelectSubset<T, DailyDashboardFindUniqueArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyDashboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyDashboardFindUniqueOrThrowArgs} args - Arguments to find a DailyDashboard
     * @example
     * // Get one DailyDashboard
     * const dailyDashboard = await prisma.dailyDashboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyDashboardFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyDashboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyDashboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDashboardFindFirstArgs} args - Arguments to find a DailyDashboard
     * @example
     * // Get one DailyDashboard
     * const dailyDashboard = await prisma.dailyDashboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyDashboardFindFirstArgs>(args?: SelectSubset<T, DailyDashboardFindFirstArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyDashboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDashboardFindFirstOrThrowArgs} args - Arguments to find a DailyDashboard
     * @example
     * // Get one DailyDashboard
     * const dailyDashboard = await prisma.dailyDashboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyDashboardFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyDashboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyDashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDashboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyDashboards
     * const dailyDashboards = await prisma.dailyDashboard.findMany()
     * 
     * // Get first 10 DailyDashboards
     * const dailyDashboards = await prisma.dailyDashboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyDashboardWithIdOnly = await prisma.dailyDashboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyDashboardFindManyArgs>(args?: SelectSubset<T, DailyDashboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyDashboard.
     * @param {DailyDashboardCreateArgs} args - Arguments to create a DailyDashboard.
     * @example
     * // Create one DailyDashboard
     * const DailyDashboard = await prisma.dailyDashboard.create({
     *   data: {
     *     // ... data to create a DailyDashboard
     *   }
     * })
     * 
     */
    create<T extends DailyDashboardCreateArgs>(args: SelectSubset<T, DailyDashboardCreateArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyDashboards.
     * @param {DailyDashboardCreateManyArgs} args - Arguments to create many DailyDashboards.
     * @example
     * // Create many DailyDashboards
     * const dailyDashboard = await prisma.dailyDashboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyDashboardCreateManyArgs>(args?: SelectSubset<T, DailyDashboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyDashboards and returns the data saved in the database.
     * @param {DailyDashboardCreateManyAndReturnArgs} args - Arguments to create many DailyDashboards.
     * @example
     * // Create many DailyDashboards
     * const dailyDashboard = await prisma.dailyDashboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyDashboards and only return the `id`
     * const dailyDashboardWithIdOnly = await prisma.dailyDashboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyDashboardCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyDashboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyDashboard.
     * @param {DailyDashboardDeleteArgs} args - Arguments to delete one DailyDashboard.
     * @example
     * // Delete one DailyDashboard
     * const DailyDashboard = await prisma.dailyDashboard.delete({
     *   where: {
     *     // ... filter to delete one DailyDashboard
     *   }
     * })
     * 
     */
    delete<T extends DailyDashboardDeleteArgs>(args: SelectSubset<T, DailyDashboardDeleteArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyDashboard.
     * @param {DailyDashboardUpdateArgs} args - Arguments to update one DailyDashboard.
     * @example
     * // Update one DailyDashboard
     * const dailyDashboard = await prisma.dailyDashboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyDashboardUpdateArgs>(args: SelectSubset<T, DailyDashboardUpdateArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyDashboards.
     * @param {DailyDashboardDeleteManyArgs} args - Arguments to filter DailyDashboards to delete.
     * @example
     * // Delete a few DailyDashboards
     * const { count } = await prisma.dailyDashboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyDashboardDeleteManyArgs>(args?: SelectSubset<T, DailyDashboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyDashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDashboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyDashboards
     * const dailyDashboard = await prisma.dailyDashboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyDashboardUpdateManyArgs>(args: SelectSubset<T, DailyDashboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyDashboards and returns the data updated in the database.
     * @param {DailyDashboardUpdateManyAndReturnArgs} args - Arguments to update many DailyDashboards.
     * @example
     * // Update many DailyDashboards
     * const dailyDashboard = await prisma.dailyDashboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyDashboards and only return the `id`
     * const dailyDashboardWithIdOnly = await prisma.dailyDashboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyDashboardUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyDashboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyDashboard.
     * @param {DailyDashboardUpsertArgs} args - Arguments to update or create a DailyDashboard.
     * @example
     * // Update or create a DailyDashboard
     * const dailyDashboard = await prisma.dailyDashboard.upsert({
     *   create: {
     *     // ... data to create a DailyDashboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyDashboard we want to update
     *   }
     * })
     */
    upsert<T extends DailyDashboardUpsertArgs>(args: SelectSubset<T, DailyDashboardUpsertArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyDashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDashboardCountArgs} args - Arguments to filter DailyDashboards to count.
     * @example
     * // Count the number of DailyDashboards
     * const count = await prisma.dailyDashboard.count({
     *   where: {
     *     // ... the filter for the DailyDashboards we want to count
     *   }
     * })
    **/
    count<T extends DailyDashboardCountArgs>(
      args?: Subset<T, DailyDashboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyDashboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyDashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDashboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyDashboardAggregateArgs>(args: Subset<T, DailyDashboardAggregateArgs>): Prisma.PrismaPromise<GetDailyDashboardAggregateType<T>>

    /**
     * Group by DailyDashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyDashboardGroupByArgs} args - Group by arguments.
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
      T extends DailyDashboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyDashboardGroupByArgs['orderBy'] }
        : { orderBy?: DailyDashboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyDashboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyDashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyDashboard model
   */
  readonly fields: DailyDashboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyDashboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyDashboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objetivos<T extends DailyDashboard$objetivosArgs<ExtArgs> = {}>(args?: Subset<T, DailyDashboard$objetivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cronograma<T extends DailyDashboard$cronogramaArgs<ExtArgs> = {}>(args?: Subset<T, DailyDashboard$cronogramaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metricas<T extends DailyDashboard$metricasArgs<ExtArgs> = {}>(args?: Subset<T, DailyDashboard$metricasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DailyDashboard model
   */
  interface DailyDashboardFieldRefs {
    readonly id: FieldRef<"DailyDashboard", 'String'>
    readonly date: FieldRef<"DailyDashboard", 'DateTime'>
    readonly createdAt: FieldRef<"DailyDashboard", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyDashboard", 'DateTime'>
    readonly proximosConteudos: FieldRef<"DailyDashboard", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * DailyDashboard findUnique
   */
  export type DailyDashboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * Filter, which DailyDashboard to fetch.
     */
    where: DailyDashboardWhereUniqueInput
  }

  /**
   * DailyDashboard findUniqueOrThrow
   */
  export type DailyDashboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * Filter, which DailyDashboard to fetch.
     */
    where: DailyDashboardWhereUniqueInput
  }

  /**
   * DailyDashboard findFirst
   */
  export type DailyDashboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * Filter, which DailyDashboard to fetch.
     */
    where?: DailyDashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyDashboards to fetch.
     */
    orderBy?: DailyDashboardOrderByWithRelationInput | DailyDashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyDashboards.
     */
    cursor?: DailyDashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyDashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyDashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyDashboards.
     */
    distinct?: DailyDashboardScalarFieldEnum | DailyDashboardScalarFieldEnum[]
  }

  /**
   * DailyDashboard findFirstOrThrow
   */
  export type DailyDashboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * Filter, which DailyDashboard to fetch.
     */
    where?: DailyDashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyDashboards to fetch.
     */
    orderBy?: DailyDashboardOrderByWithRelationInput | DailyDashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyDashboards.
     */
    cursor?: DailyDashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyDashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyDashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyDashboards.
     */
    distinct?: DailyDashboardScalarFieldEnum | DailyDashboardScalarFieldEnum[]
  }

  /**
   * DailyDashboard findMany
   */
  export type DailyDashboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * Filter, which DailyDashboards to fetch.
     */
    where?: DailyDashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyDashboards to fetch.
     */
    orderBy?: DailyDashboardOrderByWithRelationInput | DailyDashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyDashboards.
     */
    cursor?: DailyDashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyDashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyDashboards.
     */
    skip?: number
    distinct?: DailyDashboardScalarFieldEnum | DailyDashboardScalarFieldEnum[]
  }

  /**
   * DailyDashboard create
   */
  export type DailyDashboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyDashboard.
     */
    data: XOR<DailyDashboardCreateInput, DailyDashboardUncheckedCreateInput>
  }

  /**
   * DailyDashboard createMany
   */
  export type DailyDashboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyDashboards.
     */
    data: DailyDashboardCreateManyInput | DailyDashboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyDashboard createManyAndReturn
   */
  export type DailyDashboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * The data used to create many DailyDashboards.
     */
    data: DailyDashboardCreateManyInput | DailyDashboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyDashboard update
   */
  export type DailyDashboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyDashboard.
     */
    data: XOR<DailyDashboardUpdateInput, DailyDashboardUncheckedUpdateInput>
    /**
     * Choose, which DailyDashboard to update.
     */
    where: DailyDashboardWhereUniqueInput
  }

  /**
   * DailyDashboard updateMany
   */
  export type DailyDashboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyDashboards.
     */
    data: XOR<DailyDashboardUpdateManyMutationInput, DailyDashboardUncheckedUpdateManyInput>
    /**
     * Filter which DailyDashboards to update
     */
    where?: DailyDashboardWhereInput
    /**
     * Limit how many DailyDashboards to update.
     */
    limit?: number
  }

  /**
   * DailyDashboard updateManyAndReturn
   */
  export type DailyDashboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * The data used to update DailyDashboards.
     */
    data: XOR<DailyDashboardUpdateManyMutationInput, DailyDashboardUncheckedUpdateManyInput>
    /**
     * Filter which DailyDashboards to update
     */
    where?: DailyDashboardWhereInput
    /**
     * Limit how many DailyDashboards to update.
     */
    limit?: number
  }

  /**
   * DailyDashboard upsert
   */
  export type DailyDashboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyDashboard to update in case it exists.
     */
    where: DailyDashboardWhereUniqueInput
    /**
     * In case the DailyDashboard found by the `where` argument doesn't exist, create a new DailyDashboard with this data.
     */
    create: XOR<DailyDashboardCreateInput, DailyDashboardUncheckedCreateInput>
    /**
     * In case the DailyDashboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyDashboardUpdateInput, DailyDashboardUncheckedUpdateInput>
  }

  /**
   * DailyDashboard delete
   */
  export type DailyDashboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
    /**
     * Filter which DailyDashboard to delete.
     */
    where: DailyDashboardWhereUniqueInput
  }

  /**
   * DailyDashboard deleteMany
   */
  export type DailyDashboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyDashboards to delete
     */
    where?: DailyDashboardWhereInput
    /**
     * Limit how many DailyDashboards to delete.
     */
    limit?: number
  }

  /**
   * DailyDashboard.objetivos
   */
  export type DailyDashboard$objetivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    where?: ObjetivoWhereInput
    orderBy?: ObjetivoOrderByWithRelationInput | ObjetivoOrderByWithRelationInput[]
    cursor?: ObjetivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObjetivoScalarFieldEnum | ObjetivoScalarFieldEnum[]
  }

  /**
   * DailyDashboard.cronograma
   */
  export type DailyDashboard$cronogramaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * DailyDashboard.metricas
   */
  export type DailyDashboard$metricasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    where?: MetricaDisciplinaWhereInput
    orderBy?: MetricaDisciplinaOrderByWithRelationInput | MetricaDisciplinaOrderByWithRelationInput[]
    cursor?: MetricaDisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricaDisciplinaScalarFieldEnum | MetricaDisciplinaScalarFieldEnum[]
  }

  /**
   * DailyDashboard without action
   */
  export type DailyDashboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyDashboard
     */
    select?: DailyDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyDashboard
     */
    omit?: DailyDashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyDashboardInclude<ExtArgs> | null
  }


  /**
   * Model Objetivo
   */

  export type AggregateObjetivo = {
    _count: ObjetivoCountAggregateOutputType | null
    _min: ObjetivoMinAggregateOutputType | null
    _max: ObjetivoMaxAggregateOutputType | null
  }

  export type ObjetivoMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    completo: boolean | null
    dashboardId: string | null
  }

  export type ObjetivoMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    completo: boolean | null
    dashboardId: string | null
  }

  export type ObjetivoCountAggregateOutputType = {
    id: number
    descricao: number
    completo: number
    dashboardId: number
    _all: number
  }


  export type ObjetivoMinAggregateInputType = {
    id?: true
    descricao?: true
    completo?: true
    dashboardId?: true
  }

  export type ObjetivoMaxAggregateInputType = {
    id?: true
    descricao?: true
    completo?: true
    dashboardId?: true
  }

  export type ObjetivoCountAggregateInputType = {
    id?: true
    descricao?: true
    completo?: true
    dashboardId?: true
    _all?: true
  }

  export type ObjetivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objetivo to aggregate.
     */
    where?: ObjetivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objetivos to fetch.
     */
    orderBy?: ObjetivoOrderByWithRelationInput | ObjetivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjetivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objetivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objetivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Objetivos
    **/
    _count?: true | ObjetivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjetivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjetivoMaxAggregateInputType
  }

  export type GetObjetivoAggregateType<T extends ObjetivoAggregateArgs> = {
        [P in keyof T & keyof AggregateObjetivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjetivo[P]>
      : GetScalarType<T[P], AggregateObjetivo[P]>
  }




  export type ObjetivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetivoWhereInput
    orderBy?: ObjetivoOrderByWithAggregationInput | ObjetivoOrderByWithAggregationInput[]
    by: ObjetivoScalarFieldEnum[] | ObjetivoScalarFieldEnum
    having?: ObjetivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjetivoCountAggregateInputType | true
    _min?: ObjetivoMinAggregateInputType
    _max?: ObjetivoMaxAggregateInputType
  }

  export type ObjetivoGroupByOutputType = {
    id: string
    descricao: string
    completo: boolean
    dashboardId: string
    _count: ObjetivoCountAggregateOutputType | null
    _min: ObjetivoMinAggregateOutputType | null
    _max: ObjetivoMaxAggregateOutputType | null
  }

  type GetObjetivoGroupByPayload<T extends ObjetivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjetivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjetivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjetivoGroupByOutputType[P]>
            : GetScalarType<T[P], ObjetivoGroupByOutputType[P]>
        }
      >
    >


  export type ObjetivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    completo?: boolean
    dashboardId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objetivo"]>

  export type ObjetivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    completo?: boolean
    dashboardId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objetivo"]>

  export type ObjetivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    completo?: boolean
    dashboardId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objetivo"]>

  export type ObjetivoSelectScalar = {
    id?: boolean
    descricao?: boolean
    completo?: boolean
    dashboardId?: boolean
  }

  export type ObjetivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "completo" | "dashboardId", ExtArgs["result"]["objetivo"]>
  export type ObjetivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
  }
  export type ObjetivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
  }
  export type ObjetivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
  }

  export type $ObjetivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Objetivo"
    objects: {
      dashboard: Prisma.$DailyDashboardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      completo: boolean
      dashboardId: string
    }, ExtArgs["result"]["objetivo"]>
    composites: {}
  }

  type ObjetivoGetPayload<S extends boolean | null | undefined | ObjetivoDefaultArgs> = $Result.GetResult<Prisma.$ObjetivoPayload, S>

  type ObjetivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjetivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjetivoCountAggregateInputType | true
    }

  export interface ObjetivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Objetivo'], meta: { name: 'Objetivo' } }
    /**
     * Find zero or one Objetivo that matches the filter.
     * @param {ObjetivoFindUniqueArgs} args - Arguments to find a Objetivo
     * @example
     * // Get one Objetivo
     * const objetivo = await prisma.objetivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjetivoFindUniqueArgs>(args: SelectSubset<T, ObjetivoFindUniqueArgs<ExtArgs>>): Prisma__ObjetivoClient<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Objetivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjetivoFindUniqueOrThrowArgs} args - Arguments to find a Objetivo
     * @example
     * // Get one Objetivo
     * const objetivo = await prisma.objetivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjetivoFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjetivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjetivoClient<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objetivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivoFindFirstArgs} args - Arguments to find a Objetivo
     * @example
     * // Get one Objetivo
     * const objetivo = await prisma.objetivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjetivoFindFirstArgs>(args?: SelectSubset<T, ObjetivoFindFirstArgs<ExtArgs>>): Prisma__ObjetivoClient<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Objetivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivoFindFirstOrThrowArgs} args - Arguments to find a Objetivo
     * @example
     * // Get one Objetivo
     * const objetivo = await prisma.objetivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjetivoFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjetivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjetivoClient<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Objetivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Objetivos
     * const objetivos = await prisma.objetivo.findMany()
     * 
     * // Get first 10 Objetivos
     * const objetivos = await prisma.objetivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objetivoWithIdOnly = await prisma.objetivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjetivoFindManyArgs>(args?: SelectSubset<T, ObjetivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Objetivo.
     * @param {ObjetivoCreateArgs} args - Arguments to create a Objetivo.
     * @example
     * // Create one Objetivo
     * const Objetivo = await prisma.objetivo.create({
     *   data: {
     *     // ... data to create a Objetivo
     *   }
     * })
     * 
     */
    create<T extends ObjetivoCreateArgs>(args: SelectSubset<T, ObjetivoCreateArgs<ExtArgs>>): Prisma__ObjetivoClient<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Objetivos.
     * @param {ObjetivoCreateManyArgs} args - Arguments to create many Objetivos.
     * @example
     * // Create many Objetivos
     * const objetivo = await prisma.objetivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjetivoCreateManyArgs>(args?: SelectSubset<T, ObjetivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Objetivos and returns the data saved in the database.
     * @param {ObjetivoCreateManyAndReturnArgs} args - Arguments to create many Objetivos.
     * @example
     * // Create many Objetivos
     * const objetivo = await prisma.objetivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Objetivos and only return the `id`
     * const objetivoWithIdOnly = await prisma.objetivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjetivoCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjetivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Objetivo.
     * @param {ObjetivoDeleteArgs} args - Arguments to delete one Objetivo.
     * @example
     * // Delete one Objetivo
     * const Objetivo = await prisma.objetivo.delete({
     *   where: {
     *     // ... filter to delete one Objetivo
     *   }
     * })
     * 
     */
    delete<T extends ObjetivoDeleteArgs>(args: SelectSubset<T, ObjetivoDeleteArgs<ExtArgs>>): Prisma__ObjetivoClient<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Objetivo.
     * @param {ObjetivoUpdateArgs} args - Arguments to update one Objetivo.
     * @example
     * // Update one Objetivo
     * const objetivo = await prisma.objetivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjetivoUpdateArgs>(args: SelectSubset<T, ObjetivoUpdateArgs<ExtArgs>>): Prisma__ObjetivoClient<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Objetivos.
     * @param {ObjetivoDeleteManyArgs} args - Arguments to filter Objetivos to delete.
     * @example
     * // Delete a few Objetivos
     * const { count } = await prisma.objetivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjetivoDeleteManyArgs>(args?: SelectSubset<T, ObjetivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objetivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Objetivos
     * const objetivo = await prisma.objetivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjetivoUpdateManyArgs>(args: SelectSubset<T, ObjetivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objetivos and returns the data updated in the database.
     * @param {ObjetivoUpdateManyAndReturnArgs} args - Arguments to update many Objetivos.
     * @example
     * // Update many Objetivos
     * const objetivo = await prisma.objetivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Objetivos and only return the `id`
     * const objetivoWithIdOnly = await prisma.objetivo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ObjetivoUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjetivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Objetivo.
     * @param {ObjetivoUpsertArgs} args - Arguments to update or create a Objetivo.
     * @example
     * // Update or create a Objetivo
     * const objetivo = await prisma.objetivo.upsert({
     *   create: {
     *     // ... data to create a Objetivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Objetivo we want to update
     *   }
     * })
     */
    upsert<T extends ObjetivoUpsertArgs>(args: SelectSubset<T, ObjetivoUpsertArgs<ExtArgs>>): Prisma__ObjetivoClient<$Result.GetResult<Prisma.$ObjetivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Objetivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivoCountArgs} args - Arguments to filter Objetivos to count.
     * @example
     * // Count the number of Objetivos
     * const count = await prisma.objetivo.count({
     *   where: {
     *     // ... the filter for the Objetivos we want to count
     *   }
     * })
    **/
    count<T extends ObjetivoCountArgs>(
      args?: Subset<T, ObjetivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjetivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Objetivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObjetivoAggregateArgs>(args: Subset<T, ObjetivoAggregateArgs>): Prisma.PrismaPromise<GetObjetivoAggregateType<T>>

    /**
     * Group by Objetivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivoGroupByArgs} args - Group by arguments.
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
      T extends ObjetivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjetivoGroupByArgs['orderBy'] }
        : { orderBy?: ObjetivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObjetivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjetivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Objetivo model
   */
  readonly fields: ObjetivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Objetivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjetivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dashboard<T extends DailyDashboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyDashboardDefaultArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Objetivo model
   */
  interface ObjetivoFieldRefs {
    readonly id: FieldRef<"Objetivo", 'String'>
    readonly descricao: FieldRef<"Objetivo", 'String'>
    readonly completo: FieldRef<"Objetivo", 'Boolean'>
    readonly dashboardId: FieldRef<"Objetivo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Objetivo findUnique
   */
  export type ObjetivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * Filter, which Objetivo to fetch.
     */
    where: ObjetivoWhereUniqueInput
  }

  /**
   * Objetivo findUniqueOrThrow
   */
  export type ObjetivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * Filter, which Objetivo to fetch.
     */
    where: ObjetivoWhereUniqueInput
  }

  /**
   * Objetivo findFirst
   */
  export type ObjetivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * Filter, which Objetivo to fetch.
     */
    where?: ObjetivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objetivos to fetch.
     */
    orderBy?: ObjetivoOrderByWithRelationInput | ObjetivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objetivos.
     */
    cursor?: ObjetivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objetivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objetivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objetivos.
     */
    distinct?: ObjetivoScalarFieldEnum | ObjetivoScalarFieldEnum[]
  }

  /**
   * Objetivo findFirstOrThrow
   */
  export type ObjetivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * Filter, which Objetivo to fetch.
     */
    where?: ObjetivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objetivos to fetch.
     */
    orderBy?: ObjetivoOrderByWithRelationInput | ObjetivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objetivos.
     */
    cursor?: ObjetivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objetivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objetivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objetivos.
     */
    distinct?: ObjetivoScalarFieldEnum | ObjetivoScalarFieldEnum[]
  }

  /**
   * Objetivo findMany
   */
  export type ObjetivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * Filter, which Objetivos to fetch.
     */
    where?: ObjetivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objetivos to fetch.
     */
    orderBy?: ObjetivoOrderByWithRelationInput | ObjetivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Objetivos.
     */
    cursor?: ObjetivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objetivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objetivos.
     */
    skip?: number
    distinct?: ObjetivoScalarFieldEnum | ObjetivoScalarFieldEnum[]
  }

  /**
   * Objetivo create
   */
  export type ObjetivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Objetivo.
     */
    data: XOR<ObjetivoCreateInput, ObjetivoUncheckedCreateInput>
  }

  /**
   * Objetivo createMany
   */
  export type ObjetivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Objetivos.
     */
    data: ObjetivoCreateManyInput | ObjetivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Objetivo createManyAndReturn
   */
  export type ObjetivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * The data used to create many Objetivos.
     */
    data: ObjetivoCreateManyInput | ObjetivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Objetivo update
   */
  export type ObjetivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Objetivo.
     */
    data: XOR<ObjetivoUpdateInput, ObjetivoUncheckedUpdateInput>
    /**
     * Choose, which Objetivo to update.
     */
    where: ObjetivoWhereUniqueInput
  }

  /**
   * Objetivo updateMany
   */
  export type ObjetivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Objetivos.
     */
    data: XOR<ObjetivoUpdateManyMutationInput, ObjetivoUncheckedUpdateManyInput>
    /**
     * Filter which Objetivos to update
     */
    where?: ObjetivoWhereInput
    /**
     * Limit how many Objetivos to update.
     */
    limit?: number
  }

  /**
   * Objetivo updateManyAndReturn
   */
  export type ObjetivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * The data used to update Objetivos.
     */
    data: XOR<ObjetivoUpdateManyMutationInput, ObjetivoUncheckedUpdateManyInput>
    /**
     * Filter which Objetivos to update
     */
    where?: ObjetivoWhereInput
    /**
     * Limit how many Objetivos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Objetivo upsert
   */
  export type ObjetivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Objetivo to update in case it exists.
     */
    where: ObjetivoWhereUniqueInput
    /**
     * In case the Objetivo found by the `where` argument doesn't exist, create a new Objetivo with this data.
     */
    create: XOR<ObjetivoCreateInput, ObjetivoUncheckedCreateInput>
    /**
     * In case the Objetivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjetivoUpdateInput, ObjetivoUncheckedUpdateInput>
  }

  /**
   * Objetivo delete
   */
  export type ObjetivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
    /**
     * Filter which Objetivo to delete.
     */
    where: ObjetivoWhereUniqueInput
  }

  /**
   * Objetivo deleteMany
   */
  export type ObjetivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objetivos to delete
     */
    where?: ObjetivoWhereInput
    /**
     * Limit how many Objetivos to delete.
     */
    limit?: number
  }

  /**
   * Objetivo without action
   */
  export type ObjetivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Objetivo
     */
    select?: ObjetivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Objetivo
     */
    omit?: ObjetivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivoInclude<ExtArgs> | null
  }


  /**
   * Model Atividade
   */

  export type AggregateAtividade = {
    _count: AtividadeCountAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  export type AtividadeMinAggregateOutputType = {
    id: string | null
    horario: string | null
    atividade: string | null
    status: $Enums.AtividadeStatus | null
    dashboardId: string | null
    disciplinaId: string | null
  }

  export type AtividadeMaxAggregateOutputType = {
    id: string | null
    horario: string | null
    atividade: string | null
    status: $Enums.AtividadeStatus | null
    dashboardId: string | null
    disciplinaId: string | null
  }

  export type AtividadeCountAggregateOutputType = {
    id: number
    horario: number
    atividade: number
    status: number
    dashboardId: number
    disciplinaId: number
    _all: number
  }


  export type AtividadeMinAggregateInputType = {
    id?: true
    horario?: true
    atividade?: true
    status?: true
    dashboardId?: true
    disciplinaId?: true
  }

  export type AtividadeMaxAggregateInputType = {
    id?: true
    horario?: true
    atividade?: true
    status?: true
    dashboardId?: true
    disciplinaId?: true
  }

  export type AtividadeCountAggregateInputType = {
    id?: true
    horario?: true
    atividade?: true
    status?: true
    dashboardId?: true
    disciplinaId?: true
    _all?: true
  }

  export type AtividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividade to aggregate.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atividades
    **/
    _count?: true | AtividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeMaxAggregateInputType
  }

  export type GetAtividadeAggregateType<T extends AtividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividade[P]>
      : GetScalarType<T[P], AggregateAtividade[P]>
  }




  export type AtividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithAggregationInput | AtividadeOrderByWithAggregationInput[]
    by: AtividadeScalarFieldEnum[] | AtividadeScalarFieldEnum
    having?: AtividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeCountAggregateInputType | true
    _min?: AtividadeMinAggregateInputType
    _max?: AtividadeMaxAggregateInputType
  }

  export type AtividadeGroupByOutputType = {
    id: string
    horario: string
    atividade: string
    status: $Enums.AtividadeStatus
    dashboardId: string
    disciplinaId: string | null
    _count: AtividadeCountAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  type GetAtividadeGroupByPayload<T extends AtividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    atividade?: boolean
    status?: boolean
    dashboardId?: boolean
    disciplinaId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | Atividade$disciplinaArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    atividade?: boolean
    status?: boolean
    dashboardId?: boolean
    disciplinaId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | Atividade$disciplinaArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    atividade?: boolean
    status?: boolean
    dashboardId?: boolean
    disciplinaId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | Atividade$disciplinaArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>

  export type AtividadeSelectScalar = {
    id?: boolean
    horario?: boolean
    atividade?: boolean
    status?: boolean
    dashboardId?: boolean
    disciplinaId?: boolean
  }

  export type AtividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horario" | "atividade" | "status" | "dashboardId" | "disciplinaId", ExtArgs["result"]["atividade"]>
  export type AtividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | Atividade$disciplinaArgs<ExtArgs>
  }
  export type AtividadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | Atividade$disciplinaArgs<ExtArgs>
  }
  export type AtividadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | Atividade$disciplinaArgs<ExtArgs>
  }

  export type $AtividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atividade"
    objects: {
      dashboard: Prisma.$DailyDashboardPayload<ExtArgs>
      disciplina: Prisma.$DisciplinaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      horario: string
      atividade: string
      status: $Enums.AtividadeStatus
      dashboardId: string
      disciplinaId: string | null
    }, ExtArgs["result"]["atividade"]>
    composites: {}
  }

  type AtividadeGetPayload<S extends boolean | null | undefined | AtividadeDefaultArgs> = $Result.GetResult<Prisma.$AtividadePayload, S>

  type AtividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtividadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtividadeCountAggregateInputType | true
    }

  export interface AtividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atividade'], meta: { name: 'Atividade' } }
    /**
     * Find zero or one Atividade that matches the filter.
     * @param {AtividadeFindUniqueArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeFindUniqueArgs>(args: SelectSubset<T, AtividadeFindUniqueArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atividade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtividadeFindUniqueOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeFindFirstArgs>(args?: SelectSubset<T, AtividadeFindFirstArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividades
     * const atividades = await prisma.atividade.findMany()
     * 
     * // Get first 10 Atividades
     * const atividades = await prisma.atividade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeWithIdOnly = await prisma.atividade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeFindManyArgs>(args?: SelectSubset<T, AtividadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atividade.
     * @param {AtividadeCreateArgs} args - Arguments to create a Atividade.
     * @example
     * // Create one Atividade
     * const Atividade = await prisma.atividade.create({
     *   data: {
     *     // ... data to create a Atividade
     *   }
     * })
     * 
     */
    create<T extends AtividadeCreateArgs>(args: SelectSubset<T, AtividadeCreateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atividades.
     * @param {AtividadeCreateManyArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeCreateManyArgs>(args?: SelectSubset<T, AtividadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atividades and returns the data saved in the database.
     * @param {AtividadeCreateManyAndReturnArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atividades and only return the `id`
     * const atividadeWithIdOnly = await prisma.atividade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtividadeCreateManyAndReturnArgs>(args?: SelectSubset<T, AtividadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atividade.
     * @param {AtividadeDeleteArgs} args - Arguments to delete one Atividade.
     * @example
     * // Delete one Atividade
     * const Atividade = await prisma.atividade.delete({
     *   where: {
     *     // ... filter to delete one Atividade
     *   }
     * })
     * 
     */
    delete<T extends AtividadeDeleteArgs>(args: SelectSubset<T, AtividadeDeleteArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atividade.
     * @param {AtividadeUpdateArgs} args - Arguments to update one Atividade.
     * @example
     * // Update one Atividade
     * const atividade = await prisma.atividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeUpdateArgs>(args: SelectSubset<T, AtividadeUpdateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atividades.
     * @param {AtividadeDeleteManyArgs} args - Arguments to filter Atividades to delete.
     * @example
     * // Delete a few Atividades
     * const { count } = await prisma.atividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeDeleteManyArgs>(args?: SelectSubset<T, AtividadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeUpdateManyArgs>(args: SelectSubset<T, AtividadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades and returns the data updated in the database.
     * @param {AtividadeUpdateManyAndReturnArgs} args - Arguments to update many Atividades.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atividades and only return the `id`
     * const atividadeWithIdOnly = await prisma.atividade.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtividadeUpdateManyAndReturnArgs>(args: SelectSubset<T, AtividadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atividade.
     * @param {AtividadeUpsertArgs} args - Arguments to update or create a Atividade.
     * @example
     * // Update or create a Atividade
     * const atividade = await prisma.atividade.upsert({
     *   create: {
     *     // ... data to create a Atividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividade we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeUpsertArgs>(args: SelectSubset<T, AtividadeUpsertArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeCountArgs} args - Arguments to filter Atividades to count.
     * @example
     * // Count the number of Atividades
     * const count = await prisma.atividade.count({
     *   where: {
     *     // ... the filter for the Atividades we want to count
     *   }
     * })
    **/
    count<T extends AtividadeCountArgs>(
      args?: Subset<T, AtividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeAggregateArgs>(args: Subset<T, AtividadeAggregateArgs>): Prisma.PrismaPromise<GetAtividadeAggregateType<T>>

    /**
     * Group by Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeGroupByArgs} args - Group by arguments.
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
      T extends AtividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atividade model
   */
  readonly fields: AtividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dashboard<T extends DailyDashboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyDashboardDefaultArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends Atividade$disciplinaArgs<ExtArgs> = {}>(args?: Subset<T, Atividade$disciplinaArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atividade model
   */
  interface AtividadeFieldRefs {
    readonly id: FieldRef<"Atividade", 'String'>
    readonly horario: FieldRef<"Atividade", 'String'>
    readonly atividade: FieldRef<"Atividade", 'String'>
    readonly status: FieldRef<"Atividade", 'AtividadeStatus'>
    readonly dashboardId: FieldRef<"Atividade", 'String'>
    readonly disciplinaId: FieldRef<"Atividade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Atividade findUnique
   */
  export type AtividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findUniqueOrThrow
   */
  export type AtividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findFirst
   */
  export type AtividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findFirstOrThrow
   */
  export type AtividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findMany
   */
  export type AtividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividades to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade create
   */
  export type AtividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Atividade.
     */
    data: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
  }

  /**
   * Atividade createMany
   */
  export type AtividadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atividades.
     */
    data: AtividadeCreateManyInput | AtividadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atividade createManyAndReturn
   */
  export type AtividadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * The data used to create many Atividades.
     */
    data: AtividadeCreateManyInput | AtividadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atividade update
   */
  export type AtividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Atividade.
     */
    data: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
    /**
     * Choose, which Atividade to update.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade updateMany
   */
  export type AtividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atividades.
     */
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyInput>
    /**
     * Filter which Atividades to update
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to update.
     */
    limit?: number
  }

  /**
   * Atividade updateManyAndReturn
   */
  export type AtividadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * The data used to update Atividades.
     */
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyInput>
    /**
     * Filter which Atividades to update
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atividade upsert
   */
  export type AtividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Atividade to update in case it exists.
     */
    where: AtividadeWhereUniqueInput
    /**
     * In case the Atividade found by the `where` argument doesn't exist, create a new Atividade with this data.
     */
    create: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
    /**
     * In case the Atividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
  }

  /**
   * Atividade delete
   */
  export type AtividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter which Atividade to delete.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade deleteMany
   */
  export type AtividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividades to delete
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to delete.
     */
    limit?: number
  }

  /**
   * Atividade.disciplina
   */
  export type Atividade$disciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    where?: DisciplinaWhereInput
  }

  /**
   * Atividade without action
   */
  export type AtividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
  }


  /**
   * Model MetricaDisciplina
   */

  export type AggregateMetricaDisciplina = {
    _count: MetricaDisciplinaCountAggregateOutputType | null
    _avg: MetricaDisciplinaAvgAggregateOutputType | null
    _sum: MetricaDisciplinaSumAggregateOutputType | null
    _min: MetricaDisciplinaMinAggregateOutputType | null
    _max: MetricaDisciplinaMaxAggregateOutputType | null
  }

  export type MetricaDisciplinaAvgAggregateOutputType = {
    progresso: number | null
  }

  export type MetricaDisciplinaSumAggregateOutputType = {
    progresso: number | null
  }

  export type MetricaDisciplinaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    progresso: number | null
    cor: string | null
    dashboardId: string | null
    disciplinaId: string | null
  }

  export type MetricaDisciplinaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    progresso: number | null
    cor: string | null
    dashboardId: string | null
    disciplinaId: string | null
  }

  export type MetricaDisciplinaCountAggregateOutputType = {
    id: number
    nome: number
    progresso: number
    cor: number
    dashboardId: number
    disciplinaId: number
    _all: number
  }


  export type MetricaDisciplinaAvgAggregateInputType = {
    progresso?: true
  }

  export type MetricaDisciplinaSumAggregateInputType = {
    progresso?: true
  }

  export type MetricaDisciplinaMinAggregateInputType = {
    id?: true
    nome?: true
    progresso?: true
    cor?: true
    dashboardId?: true
    disciplinaId?: true
  }

  export type MetricaDisciplinaMaxAggregateInputType = {
    id?: true
    nome?: true
    progresso?: true
    cor?: true
    dashboardId?: true
    disciplinaId?: true
  }

  export type MetricaDisciplinaCountAggregateInputType = {
    id?: true
    nome?: true
    progresso?: true
    cor?: true
    dashboardId?: true
    disciplinaId?: true
    _all?: true
  }

  export type MetricaDisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricaDisciplina to aggregate.
     */
    where?: MetricaDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricaDisciplinas to fetch.
     */
    orderBy?: MetricaDisciplinaOrderByWithRelationInput | MetricaDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricaDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricaDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricaDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetricaDisciplinas
    **/
    _count?: true | MetricaDisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricaDisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricaDisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricaDisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricaDisciplinaMaxAggregateInputType
  }

  export type GetMetricaDisciplinaAggregateType<T extends MetricaDisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricaDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricaDisciplina[P]>
      : GetScalarType<T[P], AggregateMetricaDisciplina[P]>
  }




  export type MetricaDisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricaDisciplinaWhereInput
    orderBy?: MetricaDisciplinaOrderByWithAggregationInput | MetricaDisciplinaOrderByWithAggregationInput[]
    by: MetricaDisciplinaScalarFieldEnum[] | MetricaDisciplinaScalarFieldEnum
    having?: MetricaDisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricaDisciplinaCountAggregateInputType | true
    _avg?: MetricaDisciplinaAvgAggregateInputType
    _sum?: MetricaDisciplinaSumAggregateInputType
    _min?: MetricaDisciplinaMinAggregateInputType
    _max?: MetricaDisciplinaMaxAggregateInputType
  }

  export type MetricaDisciplinaGroupByOutputType = {
    id: string
    nome: string
    progresso: number
    cor: string
    dashboardId: string
    disciplinaId: string | null
    _count: MetricaDisciplinaCountAggregateOutputType | null
    _avg: MetricaDisciplinaAvgAggregateOutputType | null
    _sum: MetricaDisciplinaSumAggregateOutputType | null
    _min: MetricaDisciplinaMinAggregateOutputType | null
    _max: MetricaDisciplinaMaxAggregateOutputType | null
  }

  type GetMetricaDisciplinaGroupByPayload<T extends MetricaDisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricaDisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricaDisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricaDisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], MetricaDisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type MetricaDisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    progresso?: boolean
    cor?: boolean
    dashboardId?: boolean
    disciplinaId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | MetricaDisciplina$disciplinaArgs<ExtArgs>
    historico?: boolean | MetricaDisciplina$historicoArgs<ExtArgs>
    _count?: boolean | MetricaDisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricaDisciplina"]>

  export type MetricaDisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    progresso?: boolean
    cor?: boolean
    dashboardId?: boolean
    disciplinaId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | MetricaDisciplina$disciplinaArgs<ExtArgs>
  }, ExtArgs["result"]["metricaDisciplina"]>

  export type MetricaDisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    progresso?: boolean
    cor?: boolean
    dashboardId?: boolean
    disciplinaId?: boolean
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | MetricaDisciplina$disciplinaArgs<ExtArgs>
  }, ExtArgs["result"]["metricaDisciplina"]>

  export type MetricaDisciplinaSelectScalar = {
    id?: boolean
    nome?: boolean
    progresso?: boolean
    cor?: boolean
    dashboardId?: boolean
    disciplinaId?: boolean
  }

  export type MetricaDisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "progresso" | "cor" | "dashboardId" | "disciplinaId", ExtArgs["result"]["metricaDisciplina"]>
  export type MetricaDisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | MetricaDisciplina$disciplinaArgs<ExtArgs>
    historico?: boolean | MetricaDisciplina$historicoArgs<ExtArgs>
    _count?: boolean | MetricaDisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetricaDisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | MetricaDisciplina$disciplinaArgs<ExtArgs>
  }
  export type MetricaDisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DailyDashboardDefaultArgs<ExtArgs>
    disciplina?: boolean | MetricaDisciplina$disciplinaArgs<ExtArgs>
  }

  export type $MetricaDisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetricaDisciplina"
    objects: {
      dashboard: Prisma.$DailyDashboardPayload<ExtArgs>
      disciplina: Prisma.$DisciplinaPayload<ExtArgs> | null
      historico: Prisma.$HistoricoProgressoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      progresso: number
      cor: string
      dashboardId: string
      disciplinaId: string | null
    }, ExtArgs["result"]["metricaDisciplina"]>
    composites: {}
  }

  type MetricaDisciplinaGetPayload<S extends boolean | null | undefined | MetricaDisciplinaDefaultArgs> = $Result.GetResult<Prisma.$MetricaDisciplinaPayload, S>

  type MetricaDisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricaDisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricaDisciplinaCountAggregateInputType | true
    }

  export interface MetricaDisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetricaDisciplina'], meta: { name: 'MetricaDisciplina' } }
    /**
     * Find zero or one MetricaDisciplina that matches the filter.
     * @param {MetricaDisciplinaFindUniqueArgs} args - Arguments to find a MetricaDisciplina
     * @example
     * // Get one MetricaDisciplina
     * const metricaDisciplina = await prisma.metricaDisciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricaDisciplinaFindUniqueArgs>(args: SelectSubset<T, MetricaDisciplinaFindUniqueArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetricaDisciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricaDisciplinaFindUniqueOrThrowArgs} args - Arguments to find a MetricaDisciplina
     * @example
     * // Get one MetricaDisciplina
     * const metricaDisciplina = await prisma.metricaDisciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricaDisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricaDisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricaDisciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaDisciplinaFindFirstArgs} args - Arguments to find a MetricaDisciplina
     * @example
     * // Get one MetricaDisciplina
     * const metricaDisciplina = await prisma.metricaDisciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricaDisciplinaFindFirstArgs>(args?: SelectSubset<T, MetricaDisciplinaFindFirstArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricaDisciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaDisciplinaFindFirstOrThrowArgs} args - Arguments to find a MetricaDisciplina
     * @example
     * // Get one MetricaDisciplina
     * const metricaDisciplina = await prisma.metricaDisciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricaDisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricaDisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetricaDisciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaDisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetricaDisciplinas
     * const metricaDisciplinas = await prisma.metricaDisciplina.findMany()
     * 
     * // Get first 10 MetricaDisciplinas
     * const metricaDisciplinas = await prisma.metricaDisciplina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricaDisciplinaWithIdOnly = await prisma.metricaDisciplina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricaDisciplinaFindManyArgs>(args?: SelectSubset<T, MetricaDisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetricaDisciplina.
     * @param {MetricaDisciplinaCreateArgs} args - Arguments to create a MetricaDisciplina.
     * @example
     * // Create one MetricaDisciplina
     * const MetricaDisciplina = await prisma.metricaDisciplina.create({
     *   data: {
     *     // ... data to create a MetricaDisciplina
     *   }
     * })
     * 
     */
    create<T extends MetricaDisciplinaCreateArgs>(args: SelectSubset<T, MetricaDisciplinaCreateArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetricaDisciplinas.
     * @param {MetricaDisciplinaCreateManyArgs} args - Arguments to create many MetricaDisciplinas.
     * @example
     * // Create many MetricaDisciplinas
     * const metricaDisciplina = await prisma.metricaDisciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricaDisciplinaCreateManyArgs>(args?: SelectSubset<T, MetricaDisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetricaDisciplinas and returns the data saved in the database.
     * @param {MetricaDisciplinaCreateManyAndReturnArgs} args - Arguments to create many MetricaDisciplinas.
     * @example
     * // Create many MetricaDisciplinas
     * const metricaDisciplina = await prisma.metricaDisciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetricaDisciplinas and only return the `id`
     * const metricaDisciplinaWithIdOnly = await prisma.metricaDisciplina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricaDisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricaDisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetricaDisciplina.
     * @param {MetricaDisciplinaDeleteArgs} args - Arguments to delete one MetricaDisciplina.
     * @example
     * // Delete one MetricaDisciplina
     * const MetricaDisciplina = await prisma.metricaDisciplina.delete({
     *   where: {
     *     // ... filter to delete one MetricaDisciplina
     *   }
     * })
     * 
     */
    delete<T extends MetricaDisciplinaDeleteArgs>(args: SelectSubset<T, MetricaDisciplinaDeleteArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetricaDisciplina.
     * @param {MetricaDisciplinaUpdateArgs} args - Arguments to update one MetricaDisciplina.
     * @example
     * // Update one MetricaDisciplina
     * const metricaDisciplina = await prisma.metricaDisciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricaDisciplinaUpdateArgs>(args: SelectSubset<T, MetricaDisciplinaUpdateArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetricaDisciplinas.
     * @param {MetricaDisciplinaDeleteManyArgs} args - Arguments to filter MetricaDisciplinas to delete.
     * @example
     * // Delete a few MetricaDisciplinas
     * const { count } = await prisma.metricaDisciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricaDisciplinaDeleteManyArgs>(args?: SelectSubset<T, MetricaDisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricaDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaDisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetricaDisciplinas
     * const metricaDisciplina = await prisma.metricaDisciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricaDisciplinaUpdateManyArgs>(args: SelectSubset<T, MetricaDisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricaDisciplinas and returns the data updated in the database.
     * @param {MetricaDisciplinaUpdateManyAndReturnArgs} args - Arguments to update many MetricaDisciplinas.
     * @example
     * // Update many MetricaDisciplinas
     * const metricaDisciplina = await prisma.metricaDisciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetricaDisciplinas and only return the `id`
     * const metricaDisciplinaWithIdOnly = await prisma.metricaDisciplina.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetricaDisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricaDisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetricaDisciplina.
     * @param {MetricaDisciplinaUpsertArgs} args - Arguments to update or create a MetricaDisciplina.
     * @example
     * // Update or create a MetricaDisciplina
     * const metricaDisciplina = await prisma.metricaDisciplina.upsert({
     *   create: {
     *     // ... data to create a MetricaDisciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetricaDisciplina we want to update
     *   }
     * })
     */
    upsert<T extends MetricaDisciplinaUpsertArgs>(args: SelectSubset<T, MetricaDisciplinaUpsertArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetricaDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaDisciplinaCountArgs} args - Arguments to filter MetricaDisciplinas to count.
     * @example
     * // Count the number of MetricaDisciplinas
     * const count = await prisma.metricaDisciplina.count({
     *   where: {
     *     // ... the filter for the MetricaDisciplinas we want to count
     *   }
     * })
    **/
    count<T extends MetricaDisciplinaCountArgs>(
      args?: Subset<T, MetricaDisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricaDisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetricaDisciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaDisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricaDisciplinaAggregateArgs>(args: Subset<T, MetricaDisciplinaAggregateArgs>): Prisma.PrismaPromise<GetMetricaDisciplinaAggregateType<T>>

    /**
     * Group by MetricaDisciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaDisciplinaGroupByArgs} args - Group by arguments.
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
      T extends MetricaDisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricaDisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: MetricaDisciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetricaDisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricaDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetricaDisciplina model
   */
  readonly fields: MetricaDisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetricaDisciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricaDisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dashboard<T extends DailyDashboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyDashboardDefaultArgs<ExtArgs>>): Prisma__DailyDashboardClient<$Result.GetResult<Prisma.$DailyDashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends MetricaDisciplina$disciplinaArgs<ExtArgs> = {}>(args?: Subset<T, MetricaDisciplina$disciplinaArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    historico<T extends MetricaDisciplina$historicoArgs<ExtArgs> = {}>(args?: Subset<T, MetricaDisciplina$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MetricaDisciplina model
   */
  interface MetricaDisciplinaFieldRefs {
    readonly id: FieldRef<"MetricaDisciplina", 'String'>
    readonly nome: FieldRef<"MetricaDisciplina", 'String'>
    readonly progresso: FieldRef<"MetricaDisciplina", 'Int'>
    readonly cor: FieldRef<"MetricaDisciplina", 'String'>
    readonly dashboardId: FieldRef<"MetricaDisciplina", 'String'>
    readonly disciplinaId: FieldRef<"MetricaDisciplina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MetricaDisciplina findUnique
   */
  export type MetricaDisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which MetricaDisciplina to fetch.
     */
    where: MetricaDisciplinaWhereUniqueInput
  }

  /**
   * MetricaDisciplina findUniqueOrThrow
   */
  export type MetricaDisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which MetricaDisciplina to fetch.
     */
    where: MetricaDisciplinaWhereUniqueInput
  }

  /**
   * MetricaDisciplina findFirst
   */
  export type MetricaDisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which MetricaDisciplina to fetch.
     */
    where?: MetricaDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricaDisciplinas to fetch.
     */
    orderBy?: MetricaDisciplinaOrderByWithRelationInput | MetricaDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricaDisciplinas.
     */
    cursor?: MetricaDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricaDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricaDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricaDisciplinas.
     */
    distinct?: MetricaDisciplinaScalarFieldEnum | MetricaDisciplinaScalarFieldEnum[]
  }

  /**
   * MetricaDisciplina findFirstOrThrow
   */
  export type MetricaDisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which MetricaDisciplina to fetch.
     */
    where?: MetricaDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricaDisciplinas to fetch.
     */
    orderBy?: MetricaDisciplinaOrderByWithRelationInput | MetricaDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricaDisciplinas.
     */
    cursor?: MetricaDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricaDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricaDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricaDisciplinas.
     */
    distinct?: MetricaDisciplinaScalarFieldEnum | MetricaDisciplinaScalarFieldEnum[]
  }

  /**
   * MetricaDisciplina findMany
   */
  export type MetricaDisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which MetricaDisciplinas to fetch.
     */
    where?: MetricaDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricaDisciplinas to fetch.
     */
    orderBy?: MetricaDisciplinaOrderByWithRelationInput | MetricaDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetricaDisciplinas.
     */
    cursor?: MetricaDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricaDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricaDisciplinas.
     */
    skip?: number
    distinct?: MetricaDisciplinaScalarFieldEnum | MetricaDisciplinaScalarFieldEnum[]
  }

  /**
   * MetricaDisciplina create
   */
  export type MetricaDisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a MetricaDisciplina.
     */
    data: XOR<MetricaDisciplinaCreateInput, MetricaDisciplinaUncheckedCreateInput>
  }

  /**
   * MetricaDisciplina createMany
   */
  export type MetricaDisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetricaDisciplinas.
     */
    data: MetricaDisciplinaCreateManyInput | MetricaDisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetricaDisciplina createManyAndReturn
   */
  export type MetricaDisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many MetricaDisciplinas.
     */
    data: MetricaDisciplinaCreateManyInput | MetricaDisciplinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetricaDisciplina update
   */
  export type MetricaDisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a MetricaDisciplina.
     */
    data: XOR<MetricaDisciplinaUpdateInput, MetricaDisciplinaUncheckedUpdateInput>
    /**
     * Choose, which MetricaDisciplina to update.
     */
    where: MetricaDisciplinaWhereUniqueInput
  }

  /**
   * MetricaDisciplina updateMany
   */
  export type MetricaDisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetricaDisciplinas.
     */
    data: XOR<MetricaDisciplinaUpdateManyMutationInput, MetricaDisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which MetricaDisciplinas to update
     */
    where?: MetricaDisciplinaWhereInput
    /**
     * Limit how many MetricaDisciplinas to update.
     */
    limit?: number
  }

  /**
   * MetricaDisciplina updateManyAndReturn
   */
  export type MetricaDisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update MetricaDisciplinas.
     */
    data: XOR<MetricaDisciplinaUpdateManyMutationInput, MetricaDisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which MetricaDisciplinas to update
     */
    where?: MetricaDisciplinaWhereInput
    /**
     * Limit how many MetricaDisciplinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetricaDisciplina upsert
   */
  export type MetricaDisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the MetricaDisciplina to update in case it exists.
     */
    where: MetricaDisciplinaWhereUniqueInput
    /**
     * In case the MetricaDisciplina found by the `where` argument doesn't exist, create a new MetricaDisciplina with this data.
     */
    create: XOR<MetricaDisciplinaCreateInput, MetricaDisciplinaUncheckedCreateInput>
    /**
     * In case the MetricaDisciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricaDisciplinaUpdateInput, MetricaDisciplinaUncheckedUpdateInput>
  }

  /**
   * MetricaDisciplina delete
   */
  export type MetricaDisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    /**
     * Filter which MetricaDisciplina to delete.
     */
    where: MetricaDisciplinaWhereUniqueInput
  }

  /**
   * MetricaDisciplina deleteMany
   */
  export type MetricaDisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricaDisciplinas to delete
     */
    where?: MetricaDisciplinaWhereInput
    /**
     * Limit how many MetricaDisciplinas to delete.
     */
    limit?: number
  }

  /**
   * MetricaDisciplina.disciplina
   */
  export type MetricaDisciplina$disciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    where?: DisciplinaWhereInput
  }

  /**
   * MetricaDisciplina.historico
   */
  export type MetricaDisciplina$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    where?: HistoricoProgressoWhereInput
    orderBy?: HistoricoProgressoOrderByWithRelationInput | HistoricoProgressoOrderByWithRelationInput[]
    cursor?: HistoricoProgressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoProgressoScalarFieldEnum | HistoricoProgressoScalarFieldEnum[]
  }

  /**
   * MetricaDisciplina without action
   */
  export type MetricaDisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoProgresso
   */

  export type AggregateHistoricoProgresso = {
    _count: HistoricoProgressoCountAggregateOutputType | null
    _avg: HistoricoProgressoAvgAggregateOutputType | null
    _sum: HistoricoProgressoSumAggregateOutputType | null
    _min: HistoricoProgressoMinAggregateOutputType | null
    _max: HistoricoProgressoMaxAggregateOutputType | null
  }

  export type HistoricoProgressoAvgAggregateOutputType = {
    progresso: number | null
  }

  export type HistoricoProgressoSumAggregateOutputType = {
    progresso: number | null
  }

  export type HistoricoProgressoMinAggregateOutputType = {
    id: string | null
    data: Date | null
    progresso: number | null
    observacoes: string | null
    disciplinaId: string | null
  }

  export type HistoricoProgressoMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    progresso: number | null
    observacoes: string | null
    disciplinaId: string | null
  }

  export type HistoricoProgressoCountAggregateOutputType = {
    id: number
    data: number
    progresso: number
    observacoes: number
    disciplinaId: number
    _all: number
  }


  export type HistoricoProgressoAvgAggregateInputType = {
    progresso?: true
  }

  export type HistoricoProgressoSumAggregateInputType = {
    progresso?: true
  }

  export type HistoricoProgressoMinAggregateInputType = {
    id?: true
    data?: true
    progresso?: true
    observacoes?: true
    disciplinaId?: true
  }

  export type HistoricoProgressoMaxAggregateInputType = {
    id?: true
    data?: true
    progresso?: true
    observacoes?: true
    disciplinaId?: true
  }

  export type HistoricoProgressoCountAggregateInputType = {
    id?: true
    data?: true
    progresso?: true
    observacoes?: true
    disciplinaId?: true
    _all?: true
  }

  export type HistoricoProgressoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoProgresso to aggregate.
     */
    where?: HistoricoProgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoProgressos to fetch.
     */
    orderBy?: HistoricoProgressoOrderByWithRelationInput | HistoricoProgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoProgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoProgressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoProgressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoProgressos
    **/
    _count?: true | HistoricoProgressoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoProgressoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoProgressoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoProgressoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoProgressoMaxAggregateInputType
  }

  export type GetHistoricoProgressoAggregateType<T extends HistoricoProgressoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoProgresso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoProgresso[P]>
      : GetScalarType<T[P], AggregateHistoricoProgresso[P]>
  }




  export type HistoricoProgressoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoProgressoWhereInput
    orderBy?: HistoricoProgressoOrderByWithAggregationInput | HistoricoProgressoOrderByWithAggregationInput[]
    by: HistoricoProgressoScalarFieldEnum[] | HistoricoProgressoScalarFieldEnum
    having?: HistoricoProgressoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoProgressoCountAggregateInputType | true
    _avg?: HistoricoProgressoAvgAggregateInputType
    _sum?: HistoricoProgressoSumAggregateInputType
    _min?: HistoricoProgressoMinAggregateInputType
    _max?: HistoricoProgressoMaxAggregateInputType
  }

  export type HistoricoProgressoGroupByOutputType = {
    id: string
    data: Date
    progresso: number
    observacoes: string | null
    disciplinaId: string
    _count: HistoricoProgressoCountAggregateOutputType | null
    _avg: HistoricoProgressoAvgAggregateOutputType | null
    _sum: HistoricoProgressoSumAggregateOutputType | null
    _min: HistoricoProgressoMinAggregateOutputType | null
    _max: HistoricoProgressoMaxAggregateOutputType | null
  }

  type GetHistoricoProgressoGroupByPayload<T extends HistoricoProgressoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoProgressoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoProgressoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoProgressoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoProgressoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoProgressoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    progresso?: boolean
    observacoes?: boolean
    disciplinaId?: boolean
    disciplina?: boolean | MetricaDisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoProgresso"]>

  export type HistoricoProgressoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    progresso?: boolean
    observacoes?: boolean
    disciplinaId?: boolean
    disciplina?: boolean | MetricaDisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoProgresso"]>

  export type HistoricoProgressoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    progresso?: boolean
    observacoes?: boolean
    disciplinaId?: boolean
    disciplina?: boolean | MetricaDisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoProgresso"]>

  export type HistoricoProgressoSelectScalar = {
    id?: boolean
    data?: boolean
    progresso?: boolean
    observacoes?: boolean
    disciplinaId?: boolean
  }

  export type HistoricoProgressoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "progresso" | "observacoes" | "disciplinaId", ExtArgs["result"]["historicoProgresso"]>
  export type HistoricoProgressoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | MetricaDisciplinaDefaultArgs<ExtArgs>
  }
  export type HistoricoProgressoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | MetricaDisciplinaDefaultArgs<ExtArgs>
  }
  export type HistoricoProgressoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | MetricaDisciplinaDefaultArgs<ExtArgs>
  }

  export type $HistoricoProgressoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoProgresso"
    objects: {
      disciplina: Prisma.$MetricaDisciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      progresso: number
      observacoes: string | null
      disciplinaId: string
    }, ExtArgs["result"]["historicoProgresso"]>
    composites: {}
  }

  type HistoricoProgressoGetPayload<S extends boolean | null | undefined | HistoricoProgressoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoProgressoPayload, S>

  type HistoricoProgressoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoProgressoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoProgressoCountAggregateInputType | true
    }

  export interface HistoricoProgressoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoProgresso'], meta: { name: 'HistoricoProgresso' } }
    /**
     * Find zero or one HistoricoProgresso that matches the filter.
     * @param {HistoricoProgressoFindUniqueArgs} args - Arguments to find a HistoricoProgresso
     * @example
     * // Get one HistoricoProgresso
     * const historicoProgresso = await prisma.historicoProgresso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoProgressoFindUniqueArgs>(args: SelectSubset<T, HistoricoProgressoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoProgressoClient<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricoProgresso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoProgressoFindUniqueOrThrowArgs} args - Arguments to find a HistoricoProgresso
     * @example
     * // Get one HistoricoProgresso
     * const historicoProgresso = await prisma.historicoProgresso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoProgressoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoProgressoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoProgressoClient<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoProgresso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoProgressoFindFirstArgs} args - Arguments to find a HistoricoProgresso
     * @example
     * // Get one HistoricoProgresso
     * const historicoProgresso = await prisma.historicoProgresso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoProgressoFindFirstArgs>(args?: SelectSubset<T, HistoricoProgressoFindFirstArgs<ExtArgs>>): Prisma__HistoricoProgressoClient<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoProgresso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoProgressoFindFirstOrThrowArgs} args - Arguments to find a HistoricoProgresso
     * @example
     * // Get one HistoricoProgresso
     * const historicoProgresso = await prisma.historicoProgresso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoProgressoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoProgressoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoProgressoClient<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricoProgressos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoProgressoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoProgressos
     * const historicoProgressos = await prisma.historicoProgresso.findMany()
     * 
     * // Get first 10 HistoricoProgressos
     * const historicoProgressos = await prisma.historicoProgresso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoProgressoWithIdOnly = await prisma.historicoProgresso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoProgressoFindManyArgs>(args?: SelectSubset<T, HistoricoProgressoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricoProgresso.
     * @param {HistoricoProgressoCreateArgs} args - Arguments to create a HistoricoProgresso.
     * @example
     * // Create one HistoricoProgresso
     * const HistoricoProgresso = await prisma.historicoProgresso.create({
     *   data: {
     *     // ... data to create a HistoricoProgresso
     *   }
     * })
     * 
     */
    create<T extends HistoricoProgressoCreateArgs>(args: SelectSubset<T, HistoricoProgressoCreateArgs<ExtArgs>>): Prisma__HistoricoProgressoClient<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricoProgressos.
     * @param {HistoricoProgressoCreateManyArgs} args - Arguments to create many HistoricoProgressos.
     * @example
     * // Create many HistoricoProgressos
     * const historicoProgresso = await prisma.historicoProgresso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoProgressoCreateManyArgs>(args?: SelectSubset<T, HistoricoProgressoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricoProgressos and returns the data saved in the database.
     * @param {HistoricoProgressoCreateManyAndReturnArgs} args - Arguments to create many HistoricoProgressos.
     * @example
     * // Create many HistoricoProgressos
     * const historicoProgresso = await prisma.historicoProgresso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricoProgressos and only return the `id`
     * const historicoProgressoWithIdOnly = await prisma.historicoProgresso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoProgressoCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoProgressoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricoProgresso.
     * @param {HistoricoProgressoDeleteArgs} args - Arguments to delete one HistoricoProgresso.
     * @example
     * // Delete one HistoricoProgresso
     * const HistoricoProgresso = await prisma.historicoProgresso.delete({
     *   where: {
     *     // ... filter to delete one HistoricoProgresso
     *   }
     * })
     * 
     */
    delete<T extends HistoricoProgressoDeleteArgs>(args: SelectSubset<T, HistoricoProgressoDeleteArgs<ExtArgs>>): Prisma__HistoricoProgressoClient<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricoProgresso.
     * @param {HistoricoProgressoUpdateArgs} args - Arguments to update one HistoricoProgresso.
     * @example
     * // Update one HistoricoProgresso
     * const historicoProgresso = await prisma.historicoProgresso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoProgressoUpdateArgs>(args: SelectSubset<T, HistoricoProgressoUpdateArgs<ExtArgs>>): Prisma__HistoricoProgressoClient<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricoProgressos.
     * @param {HistoricoProgressoDeleteManyArgs} args - Arguments to filter HistoricoProgressos to delete.
     * @example
     * // Delete a few HistoricoProgressos
     * const { count } = await prisma.historicoProgresso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoProgressoDeleteManyArgs>(args?: SelectSubset<T, HistoricoProgressoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoProgressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoProgressoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoProgressos
     * const historicoProgresso = await prisma.historicoProgresso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoProgressoUpdateManyArgs>(args: SelectSubset<T, HistoricoProgressoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoProgressos and returns the data updated in the database.
     * @param {HistoricoProgressoUpdateManyAndReturnArgs} args - Arguments to update many HistoricoProgressos.
     * @example
     * // Update many HistoricoProgressos
     * const historicoProgresso = await prisma.historicoProgresso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricoProgressos and only return the `id`
     * const historicoProgressoWithIdOnly = await prisma.historicoProgresso.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoricoProgressoUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoProgressoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricoProgresso.
     * @param {HistoricoProgressoUpsertArgs} args - Arguments to update or create a HistoricoProgresso.
     * @example
     * // Update or create a HistoricoProgresso
     * const historicoProgresso = await prisma.historicoProgresso.upsert({
     *   create: {
     *     // ... data to create a HistoricoProgresso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoProgresso we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoProgressoUpsertArgs>(args: SelectSubset<T, HistoricoProgressoUpsertArgs<ExtArgs>>): Prisma__HistoricoProgressoClient<$Result.GetResult<Prisma.$HistoricoProgressoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricoProgressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoProgressoCountArgs} args - Arguments to filter HistoricoProgressos to count.
     * @example
     * // Count the number of HistoricoProgressos
     * const count = await prisma.historicoProgresso.count({
     *   where: {
     *     // ... the filter for the HistoricoProgressos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoProgressoCountArgs>(
      args?: Subset<T, HistoricoProgressoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoProgressoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoProgresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoProgressoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoProgressoAggregateArgs>(args: Subset<T, HistoricoProgressoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoProgressoAggregateType<T>>

    /**
     * Group by HistoricoProgresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoProgressoGroupByArgs} args - Group by arguments.
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
      T extends HistoricoProgressoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoProgressoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoProgressoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoProgressoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoProgressoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoProgresso model
   */
  readonly fields: HistoricoProgressoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoProgresso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoProgressoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplina<T extends MetricaDisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetricaDisciplinaDefaultArgs<ExtArgs>>): Prisma__MetricaDisciplinaClient<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoricoProgresso model
   */
  interface HistoricoProgressoFieldRefs {
    readonly id: FieldRef<"HistoricoProgresso", 'String'>
    readonly data: FieldRef<"HistoricoProgresso", 'DateTime'>
    readonly progresso: FieldRef<"HistoricoProgresso", 'Int'>
    readonly observacoes: FieldRef<"HistoricoProgresso", 'String'>
    readonly disciplinaId: FieldRef<"HistoricoProgresso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoProgresso findUnique
   */
  export type HistoricoProgressoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoProgresso to fetch.
     */
    where: HistoricoProgressoWhereUniqueInput
  }

  /**
   * HistoricoProgresso findUniqueOrThrow
   */
  export type HistoricoProgressoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoProgresso to fetch.
     */
    where: HistoricoProgressoWhereUniqueInput
  }

  /**
   * HistoricoProgresso findFirst
   */
  export type HistoricoProgressoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoProgresso to fetch.
     */
    where?: HistoricoProgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoProgressos to fetch.
     */
    orderBy?: HistoricoProgressoOrderByWithRelationInput | HistoricoProgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoProgressos.
     */
    cursor?: HistoricoProgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoProgressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoProgressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoProgressos.
     */
    distinct?: HistoricoProgressoScalarFieldEnum | HistoricoProgressoScalarFieldEnum[]
  }

  /**
   * HistoricoProgresso findFirstOrThrow
   */
  export type HistoricoProgressoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoProgresso to fetch.
     */
    where?: HistoricoProgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoProgressos to fetch.
     */
    orderBy?: HistoricoProgressoOrderByWithRelationInput | HistoricoProgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoProgressos.
     */
    cursor?: HistoricoProgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoProgressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoProgressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoProgressos.
     */
    distinct?: HistoricoProgressoScalarFieldEnum | HistoricoProgressoScalarFieldEnum[]
  }

  /**
   * HistoricoProgresso findMany
   */
  export type HistoricoProgressoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoProgressos to fetch.
     */
    where?: HistoricoProgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoProgressos to fetch.
     */
    orderBy?: HistoricoProgressoOrderByWithRelationInput | HistoricoProgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoProgressos.
     */
    cursor?: HistoricoProgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoProgressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoProgressos.
     */
    skip?: number
    distinct?: HistoricoProgressoScalarFieldEnum | HistoricoProgressoScalarFieldEnum[]
  }

  /**
   * HistoricoProgresso create
   */
  export type HistoricoProgressoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoProgresso.
     */
    data: XOR<HistoricoProgressoCreateInput, HistoricoProgressoUncheckedCreateInput>
  }

  /**
   * HistoricoProgresso createMany
   */
  export type HistoricoProgressoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoProgressos.
     */
    data: HistoricoProgressoCreateManyInput | HistoricoProgressoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricoProgresso createManyAndReturn
   */
  export type HistoricoProgressoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricoProgressos.
     */
    data: HistoricoProgressoCreateManyInput | HistoricoProgressoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoProgresso update
   */
  export type HistoricoProgressoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoProgresso.
     */
    data: XOR<HistoricoProgressoUpdateInput, HistoricoProgressoUncheckedUpdateInput>
    /**
     * Choose, which HistoricoProgresso to update.
     */
    where: HistoricoProgressoWhereUniqueInput
  }

  /**
   * HistoricoProgresso updateMany
   */
  export type HistoricoProgressoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoProgressos.
     */
    data: XOR<HistoricoProgressoUpdateManyMutationInput, HistoricoProgressoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoProgressos to update
     */
    where?: HistoricoProgressoWhereInput
    /**
     * Limit how many HistoricoProgressos to update.
     */
    limit?: number
  }

  /**
   * HistoricoProgresso updateManyAndReturn
   */
  export type HistoricoProgressoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * The data used to update HistoricoProgressos.
     */
    data: XOR<HistoricoProgressoUpdateManyMutationInput, HistoricoProgressoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoProgressos to update
     */
    where?: HistoricoProgressoWhereInput
    /**
     * Limit how many HistoricoProgressos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoProgresso upsert
   */
  export type HistoricoProgressoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoProgresso to update in case it exists.
     */
    where: HistoricoProgressoWhereUniqueInput
    /**
     * In case the HistoricoProgresso found by the `where` argument doesn't exist, create a new HistoricoProgresso with this data.
     */
    create: XOR<HistoricoProgressoCreateInput, HistoricoProgressoUncheckedCreateInput>
    /**
     * In case the HistoricoProgresso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoProgressoUpdateInput, HistoricoProgressoUncheckedUpdateInput>
  }

  /**
   * HistoricoProgresso delete
   */
  export type HistoricoProgressoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
    /**
     * Filter which HistoricoProgresso to delete.
     */
    where: HistoricoProgressoWhereUniqueInput
  }

  /**
   * HistoricoProgresso deleteMany
   */
  export type HistoricoProgressoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoProgressos to delete
     */
    where?: HistoricoProgressoWhereInput
    /**
     * Limit how many HistoricoProgressos to delete.
     */
    limit?: number
  }

  /**
   * HistoricoProgresso without action
   */
  export type HistoricoProgressoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoProgresso
     */
    select?: HistoricoProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoProgresso
     */
    omit?: HistoricoProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoProgressoInclude<ExtArgs> | null
  }


  /**
   * Model Disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplinaCountAggregateOutputType = {
    id: number
    nome: number
    cor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisciplinaMinAggregateInputType = {
    id?: true
    nome?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    id?: true
    nome?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplinaCountAggregateInputType = {
    id?: true
    nome?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplina to aggregate.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type DisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithAggregationInput | DisciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: DisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    id: string
    nome: string
    cor: string
    createdAt: Date
    updatedAt: Date
    _count: DisciplinaCountAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends DisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conteudos?: boolean | Disciplina$conteudosArgs<ExtArgs>
    metricas?: boolean | Disciplina$metricasArgs<ExtArgs>
    atividades?: boolean | Disciplina$atividadesArgs<ExtArgs>
    horarios?: boolean | Disciplina$horariosArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectScalar = {
    id?: boolean
    nome?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cor" | "createdAt" | "updatedAt", ExtArgs["result"]["disciplina"]>
  export type DisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conteudos?: boolean | Disciplina$conteudosArgs<ExtArgs>
    metricas?: boolean | Disciplina$metricasArgs<ExtArgs>
    atividades?: boolean | Disciplina$atividadesArgs<ExtArgs>
    horarios?: boolean | Disciplina$horariosArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {
      conteudos: Prisma.$ConteudoPayload<ExtArgs>[]
      metricas: Prisma.$MetricaDisciplinaPayload<ExtArgs>[]
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
      horarios: Prisma.$HorarioEstudoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cor: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type DisciplinaGetPayload<S extends boolean | null | undefined | DisciplinaDefaultArgs> = $Result.GetResult<Prisma.$DisciplinaPayload, S>

  type DisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface DisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplina'], meta: { name: 'Disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {DisciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinaFindUniqueArgs>(args: SelectSubset<T, DisciplinaFindUniqueArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinaFindFirstArgs>(args?: SelectSubset<T, DisciplinaFindFirstArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplinaFindManyArgs>(args?: SelectSubset<T, DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {DisciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends DisciplinaCreateArgs>(args: SelectSubset<T, DisciplinaCreateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {DisciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinaCreateManyArgs>(args?: SelectSubset<T, DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplinas and returns the data saved in the database.
     * @param {DisciplinaCreateManyAndReturnArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplinas and only return the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disciplina.
     * @param {DisciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends DisciplinaDeleteArgs>(args: SelectSubset<T, DisciplinaDeleteArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {DisciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinaUpdateArgs>(args: SelectSubset<T, DisciplinaUpdateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinaDeleteManyArgs>(args?: SelectSubset<T, DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinaUpdateManyArgs>(args: SelectSubset<T, DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas and returns the data updated in the database.
     * @param {DisciplinaUpdateManyAndReturnArgs} args - Arguments to update many Disciplinas.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplinas and only return the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disciplina.
     * @param {DisciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinaUpsertArgs>(args: SelectSubset<T, DisciplinaUpsertArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinaCountArgs>(
      args?: Subset<T, DisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaGroupByArgs} args - Group by arguments.
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
      T extends DisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplina model
   */
  readonly fields: DisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conteudos<T extends Disciplina$conteudosArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$conteudosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metricas<T extends Disciplina$metricasArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$metricasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaDisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atividades<T extends Disciplina$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios<T extends Disciplina$horariosArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Disciplina model
   */
  interface DisciplinaFieldRefs {
    readonly id: FieldRef<"Disciplina", 'String'>
    readonly nome: FieldRef<"Disciplina", 'String'>
    readonly cor: FieldRef<"Disciplina", 'String'>
    readonly createdAt: FieldRef<"Disciplina", 'DateTime'>
    readonly updatedAt: FieldRef<"Disciplina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Disciplina findUnique
   */
  export type DisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findUniqueOrThrow
   */
  export type DisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findFirst
   */
  export type DisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findFirstOrThrow
   */
  export type DisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findMany
   */
  export type DisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina create
   */
  export type DisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplina.
     */
    data: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
  }

  /**
   * Disciplina createMany
   */
  export type DisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina createManyAndReturn
   */
  export type DisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina update
   */
  export type DisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplina.
     */
    data: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
    /**
     * Choose, which Disciplina to update.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina updateMany
   */
  export type DisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina updateManyAndReturn
   */
  export type DisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina upsert
   */
  export type DisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplina to update in case it exists.
     */
    where: DisciplinaWhereUniqueInput
    /**
     * In case the Disciplina found by the `where` argument doesn't exist, create a new Disciplina with this data.
     */
    create: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
    /**
     * In case the Disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
  }

  /**
   * Disciplina delete
   */
  export type DisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter which Disciplina to delete.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina deleteMany
   */
  export type DisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to delete.
     */
    limit?: number
  }

  /**
   * Disciplina.conteudos
   */
  export type Disciplina$conteudosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    where?: ConteudoWhereInput
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    cursor?: ConteudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Disciplina.metricas
   */
  export type Disciplina$metricasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricaDisciplina
     */
    select?: MetricaDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricaDisciplina
     */
    omit?: MetricaDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaDisciplinaInclude<ExtArgs> | null
    where?: MetricaDisciplinaWhereInput
    orderBy?: MetricaDisciplinaOrderByWithRelationInput | MetricaDisciplinaOrderByWithRelationInput[]
    cursor?: MetricaDisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricaDisciplinaScalarFieldEnum | MetricaDisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina.atividades
   */
  export type Disciplina$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Disciplina.horarios
   */
  export type Disciplina$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    where?: HorarioEstudoWhereInput
    orderBy?: HorarioEstudoOrderByWithRelationInput | HorarioEstudoOrderByWithRelationInput[]
    cursor?: HorarioEstudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioEstudoScalarFieldEnum | HorarioEstudoScalarFieldEnum[]
  }

  /**
   * Disciplina without action
   */
  export type DisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model Conteudo
   */

  export type AggregateConteudo = {
    _count: ConteudoCountAggregateOutputType | null
    _avg: ConteudoAvgAggregateOutputType | null
    _sum: ConteudoSumAggregateOutputType | null
    _min: ConteudoMinAggregateOutputType | null
    _max: ConteudoMaxAggregateOutputType | null
  }

  export type ConteudoAvgAggregateOutputType = {
    ordem: number | null
  }

  export type ConteudoSumAggregateOutputType = {
    ordem: number | null
  }

  export type ConteudoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    ordem: number | null
    completo: boolean | null
    disciplinaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConteudoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    ordem: number | null
    completo: boolean | null
    disciplinaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConteudoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    ordem: number
    completo: number
    disciplinaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConteudoAvgAggregateInputType = {
    ordem?: true
  }

  export type ConteudoSumAggregateInputType = {
    ordem?: true
  }

  export type ConteudoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ordem?: true
    completo?: true
    disciplinaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConteudoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ordem?: true
    completo?: true
    disciplinaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConteudoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ordem?: true
    completo?: true
    disciplinaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConteudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conteudo to aggregate.
     */
    where?: ConteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conteudos to fetch.
     */
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conteudos
    **/
    _count?: true | ConteudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConteudoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConteudoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConteudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConteudoMaxAggregateInputType
  }

  export type GetConteudoAggregateType<T extends ConteudoAggregateArgs> = {
        [P in keyof T & keyof AggregateConteudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConteudo[P]>
      : GetScalarType<T[P], AggregateConteudo[P]>
  }




  export type ConteudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConteudoWhereInput
    orderBy?: ConteudoOrderByWithAggregationInput | ConteudoOrderByWithAggregationInput[]
    by: ConteudoScalarFieldEnum[] | ConteudoScalarFieldEnum
    having?: ConteudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConteudoCountAggregateInputType | true
    _avg?: ConteudoAvgAggregateInputType
    _sum?: ConteudoSumAggregateInputType
    _min?: ConteudoMinAggregateInputType
    _max?: ConteudoMaxAggregateInputType
  }

  export type ConteudoGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    ordem: number
    completo: boolean
    disciplinaId: string
    createdAt: Date
    updatedAt: Date
    _count: ConteudoCountAggregateOutputType | null
    _avg: ConteudoAvgAggregateOutputType | null
    _sum: ConteudoSumAggregateOutputType | null
    _min: ConteudoMinAggregateOutputType | null
    _max: ConteudoMaxAggregateOutputType | null
  }

  type GetConteudoGroupByPayload<T extends ConteudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConteudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConteudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConteudoGroupByOutputType[P]>
            : GetScalarType<T[P], ConteudoGroupByOutputType[P]>
        }
      >
    >


  export type ConteudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ordem?: boolean
    completo?: boolean
    disciplinaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conteudo"]>

  export type ConteudoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ordem?: boolean
    completo?: boolean
    disciplinaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conteudo"]>

  export type ConteudoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ordem?: boolean
    completo?: boolean
    disciplinaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conteudo"]>

  export type ConteudoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ordem?: boolean
    completo?: boolean
    disciplinaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConteudoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "ordem" | "completo" | "disciplinaId" | "createdAt" | "updatedAt", ExtArgs["result"]["conteudo"]>
  export type ConteudoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type ConteudoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type ConteudoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }

  export type $ConteudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conteudo"
    objects: {
      disciplina: Prisma.$DisciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      ordem: number
      completo: boolean
      disciplinaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conteudo"]>
    composites: {}
  }

  type ConteudoGetPayload<S extends boolean | null | undefined | ConteudoDefaultArgs> = $Result.GetResult<Prisma.$ConteudoPayload, S>

  type ConteudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConteudoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConteudoCountAggregateInputType | true
    }

  export interface ConteudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conteudo'], meta: { name: 'Conteudo' } }
    /**
     * Find zero or one Conteudo that matches the filter.
     * @param {ConteudoFindUniqueArgs} args - Arguments to find a Conteudo
     * @example
     * // Get one Conteudo
     * const conteudo = await prisma.conteudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConteudoFindUniqueArgs>(args: SelectSubset<T, ConteudoFindUniqueArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conteudo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConteudoFindUniqueOrThrowArgs} args - Arguments to find a Conteudo
     * @example
     * // Get one Conteudo
     * const conteudo = await prisma.conteudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConteudoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConteudoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conteudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoFindFirstArgs} args - Arguments to find a Conteudo
     * @example
     * // Get one Conteudo
     * const conteudo = await prisma.conteudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConteudoFindFirstArgs>(args?: SelectSubset<T, ConteudoFindFirstArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conteudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoFindFirstOrThrowArgs} args - Arguments to find a Conteudo
     * @example
     * // Get one Conteudo
     * const conteudo = await prisma.conteudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConteudoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConteudoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conteudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conteudos
     * const conteudos = await prisma.conteudo.findMany()
     * 
     * // Get first 10 Conteudos
     * const conteudos = await prisma.conteudo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conteudoWithIdOnly = await prisma.conteudo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConteudoFindManyArgs>(args?: SelectSubset<T, ConteudoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conteudo.
     * @param {ConteudoCreateArgs} args - Arguments to create a Conteudo.
     * @example
     * // Create one Conteudo
     * const Conteudo = await prisma.conteudo.create({
     *   data: {
     *     // ... data to create a Conteudo
     *   }
     * })
     * 
     */
    create<T extends ConteudoCreateArgs>(args: SelectSubset<T, ConteudoCreateArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conteudos.
     * @param {ConteudoCreateManyArgs} args - Arguments to create many Conteudos.
     * @example
     * // Create many Conteudos
     * const conteudo = await prisma.conteudo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConteudoCreateManyArgs>(args?: SelectSubset<T, ConteudoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conteudos and returns the data saved in the database.
     * @param {ConteudoCreateManyAndReturnArgs} args - Arguments to create many Conteudos.
     * @example
     * // Create many Conteudos
     * const conteudo = await prisma.conteudo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conteudos and only return the `id`
     * const conteudoWithIdOnly = await prisma.conteudo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConteudoCreateManyAndReturnArgs>(args?: SelectSubset<T, ConteudoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conteudo.
     * @param {ConteudoDeleteArgs} args - Arguments to delete one Conteudo.
     * @example
     * // Delete one Conteudo
     * const Conteudo = await prisma.conteudo.delete({
     *   where: {
     *     // ... filter to delete one Conteudo
     *   }
     * })
     * 
     */
    delete<T extends ConteudoDeleteArgs>(args: SelectSubset<T, ConteudoDeleteArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conteudo.
     * @param {ConteudoUpdateArgs} args - Arguments to update one Conteudo.
     * @example
     * // Update one Conteudo
     * const conteudo = await prisma.conteudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConteudoUpdateArgs>(args: SelectSubset<T, ConteudoUpdateArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conteudos.
     * @param {ConteudoDeleteManyArgs} args - Arguments to filter Conteudos to delete.
     * @example
     * // Delete a few Conteudos
     * const { count } = await prisma.conteudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConteudoDeleteManyArgs>(args?: SelectSubset<T, ConteudoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conteudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conteudos
     * const conteudo = await prisma.conteudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConteudoUpdateManyArgs>(args: SelectSubset<T, ConteudoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conteudos and returns the data updated in the database.
     * @param {ConteudoUpdateManyAndReturnArgs} args - Arguments to update many Conteudos.
     * @example
     * // Update many Conteudos
     * const conteudo = await prisma.conteudo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conteudos and only return the `id`
     * const conteudoWithIdOnly = await prisma.conteudo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConteudoUpdateManyAndReturnArgs>(args: SelectSubset<T, ConteudoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conteudo.
     * @param {ConteudoUpsertArgs} args - Arguments to update or create a Conteudo.
     * @example
     * // Update or create a Conteudo
     * const conteudo = await prisma.conteudo.upsert({
     *   create: {
     *     // ... data to create a Conteudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conteudo we want to update
     *   }
     * })
     */
    upsert<T extends ConteudoUpsertArgs>(args: SelectSubset<T, ConteudoUpsertArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conteudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoCountArgs} args - Arguments to filter Conteudos to count.
     * @example
     * // Count the number of Conteudos
     * const count = await prisma.conteudo.count({
     *   where: {
     *     // ... the filter for the Conteudos we want to count
     *   }
     * })
    **/
    count<T extends ConteudoCountArgs>(
      args?: Subset<T, ConteudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConteudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conteudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConteudoAggregateArgs>(args: Subset<T, ConteudoAggregateArgs>): Prisma.PrismaPromise<GetConteudoAggregateType<T>>

    /**
     * Group by Conteudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoGroupByArgs} args - Group by arguments.
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
      T extends ConteudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConteudoGroupByArgs['orderBy'] }
        : { orderBy?: ConteudoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConteudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConteudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conteudo model
   */
  readonly fields: ConteudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conteudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConteudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Conteudo model
   */
  interface ConteudoFieldRefs {
    readonly id: FieldRef<"Conteudo", 'String'>
    readonly titulo: FieldRef<"Conteudo", 'String'>
    readonly descricao: FieldRef<"Conteudo", 'String'>
    readonly ordem: FieldRef<"Conteudo", 'Int'>
    readonly completo: FieldRef<"Conteudo", 'Boolean'>
    readonly disciplinaId: FieldRef<"Conteudo", 'String'>
    readonly createdAt: FieldRef<"Conteudo", 'DateTime'>
    readonly updatedAt: FieldRef<"Conteudo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conteudo findUnique
   */
  export type ConteudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudo to fetch.
     */
    where: ConteudoWhereUniqueInput
  }

  /**
   * Conteudo findUniqueOrThrow
   */
  export type ConteudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudo to fetch.
     */
    where: ConteudoWhereUniqueInput
  }

  /**
   * Conteudo findFirst
   */
  export type ConteudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudo to fetch.
     */
    where?: ConteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conteudos to fetch.
     */
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conteudos.
     */
    cursor?: ConteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conteudos.
     */
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Conteudo findFirstOrThrow
   */
  export type ConteudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudo to fetch.
     */
    where?: ConteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conteudos to fetch.
     */
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conteudos.
     */
    cursor?: ConteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conteudos.
     */
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Conteudo findMany
   */
  export type ConteudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudos to fetch.
     */
    where?: ConteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conteudos to fetch.
     */
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conteudos.
     */
    cursor?: ConteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conteudos.
     */
    skip?: number
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Conteudo create
   */
  export type ConteudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * The data needed to create a Conteudo.
     */
    data: XOR<ConteudoCreateInput, ConteudoUncheckedCreateInput>
  }

  /**
   * Conteudo createMany
   */
  export type ConteudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conteudos.
     */
    data: ConteudoCreateManyInput | ConteudoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conteudo createManyAndReturn
   */
  export type ConteudoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * The data used to create many Conteudos.
     */
    data: ConteudoCreateManyInput | ConteudoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conteudo update
   */
  export type ConteudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * The data needed to update a Conteudo.
     */
    data: XOR<ConteudoUpdateInput, ConteudoUncheckedUpdateInput>
    /**
     * Choose, which Conteudo to update.
     */
    where: ConteudoWhereUniqueInput
  }

  /**
   * Conteudo updateMany
   */
  export type ConteudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conteudos.
     */
    data: XOR<ConteudoUpdateManyMutationInput, ConteudoUncheckedUpdateManyInput>
    /**
     * Filter which Conteudos to update
     */
    where?: ConteudoWhereInput
    /**
     * Limit how many Conteudos to update.
     */
    limit?: number
  }

  /**
   * Conteudo updateManyAndReturn
   */
  export type ConteudoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * The data used to update Conteudos.
     */
    data: XOR<ConteudoUpdateManyMutationInput, ConteudoUncheckedUpdateManyInput>
    /**
     * Filter which Conteudos to update
     */
    where?: ConteudoWhereInput
    /**
     * Limit how many Conteudos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conteudo upsert
   */
  export type ConteudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * The filter to search for the Conteudo to update in case it exists.
     */
    where: ConteudoWhereUniqueInput
    /**
     * In case the Conteudo found by the `where` argument doesn't exist, create a new Conteudo with this data.
     */
    create: XOR<ConteudoCreateInput, ConteudoUncheckedCreateInput>
    /**
     * In case the Conteudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConteudoUpdateInput, ConteudoUncheckedUpdateInput>
  }

  /**
   * Conteudo delete
   */
  export type ConteudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter which Conteudo to delete.
     */
    where: ConteudoWhereUniqueInput
  }

  /**
   * Conteudo deleteMany
   */
  export type ConteudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conteudos to delete
     */
    where?: ConteudoWhereInput
    /**
     * Limit how many Conteudos to delete.
     */
    limit?: number
  }

  /**
   * Conteudo without action
   */
  export type ConteudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
  }


  /**
   * Model HorarioEstudo
   */

  export type AggregateHorarioEstudo = {
    _count: HorarioEstudoCountAggregateOutputType | null
    _avg: HorarioEstudoAvgAggregateOutputType | null
    _sum: HorarioEstudoSumAggregateOutputType | null
    _min: HorarioEstudoMinAggregateOutputType | null
    _max: HorarioEstudoMaxAggregateOutputType | null
  }

  export type HorarioEstudoAvgAggregateOutputType = {
    diaSemana: number | null
  }

  export type HorarioEstudoSumAggregateOutputType = {
    diaSemana: number | null
  }

  export type HorarioEstudoMinAggregateOutputType = {
    id: string | null
    diaSemana: number | null
    inicio: string | null
    fim: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplinaId: string | null
  }

  export type HorarioEstudoMaxAggregateOutputType = {
    id: string | null
    diaSemana: number | null
    inicio: string | null
    fim: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    disciplinaId: string | null
  }

  export type HorarioEstudoCountAggregateOutputType = {
    id: number
    diaSemana: number
    inicio: number
    fim: number
    ativo: number
    createdAt: number
    updatedAt: number
    disciplinaId: number
    _all: number
  }


  export type HorarioEstudoAvgAggregateInputType = {
    diaSemana?: true
  }

  export type HorarioEstudoSumAggregateInputType = {
    diaSemana?: true
  }

  export type HorarioEstudoMinAggregateInputType = {
    id?: true
    diaSemana?: true
    inicio?: true
    fim?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    disciplinaId?: true
  }

  export type HorarioEstudoMaxAggregateInputType = {
    id?: true
    diaSemana?: true
    inicio?: true
    fim?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    disciplinaId?: true
  }

  export type HorarioEstudoCountAggregateInputType = {
    id?: true
    diaSemana?: true
    inicio?: true
    fim?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    disciplinaId?: true
    _all?: true
  }

  export type HorarioEstudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioEstudo to aggregate.
     */
    where?: HorarioEstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioEstudos to fetch.
     */
    orderBy?: HorarioEstudoOrderByWithRelationInput | HorarioEstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioEstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorarioEstudos
    **/
    _count?: true | HorarioEstudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorarioEstudoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorarioEstudoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioEstudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioEstudoMaxAggregateInputType
  }

  export type GetHorarioEstudoAggregateType<T extends HorarioEstudoAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarioEstudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarioEstudo[P]>
      : GetScalarType<T[P], AggregateHorarioEstudo[P]>
  }




  export type HorarioEstudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioEstudoWhereInput
    orderBy?: HorarioEstudoOrderByWithAggregationInput | HorarioEstudoOrderByWithAggregationInput[]
    by: HorarioEstudoScalarFieldEnum[] | HorarioEstudoScalarFieldEnum
    having?: HorarioEstudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioEstudoCountAggregateInputType | true
    _avg?: HorarioEstudoAvgAggregateInputType
    _sum?: HorarioEstudoSumAggregateInputType
    _min?: HorarioEstudoMinAggregateInputType
    _max?: HorarioEstudoMaxAggregateInputType
  }

  export type HorarioEstudoGroupByOutputType = {
    id: string
    diaSemana: number
    inicio: string
    fim: string
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    disciplinaId: string
    _count: HorarioEstudoCountAggregateOutputType | null
    _avg: HorarioEstudoAvgAggregateOutputType | null
    _sum: HorarioEstudoSumAggregateOutputType | null
    _min: HorarioEstudoMinAggregateOutputType | null
    _max: HorarioEstudoMaxAggregateOutputType | null
  }

  type GetHorarioEstudoGroupByPayload<T extends HorarioEstudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioEstudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioEstudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioEstudoGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioEstudoGroupByOutputType[P]>
        }
      >
    >


  export type HorarioEstudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    inicio?: boolean
    fim?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplinaId?: boolean
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioEstudo"]>

  export type HorarioEstudoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    inicio?: boolean
    fim?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplinaId?: boolean
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioEstudo"]>

  export type HorarioEstudoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    inicio?: boolean
    fim?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplinaId?: boolean
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioEstudo"]>

  export type HorarioEstudoSelectScalar = {
    id?: boolean
    diaSemana?: boolean
    inicio?: boolean
    fim?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disciplinaId?: boolean
  }

  export type HorarioEstudoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diaSemana" | "inicio" | "fim" | "ativo" | "createdAt" | "updatedAt" | "disciplinaId", ExtArgs["result"]["horarioEstudo"]>
  export type HorarioEstudoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type HorarioEstudoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type HorarioEstudoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }

  export type $HorarioEstudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorarioEstudo"
    objects: {
      disciplina: Prisma.$DisciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      diaSemana: number
      inicio: string
      fim: string
      ativo: boolean
      createdAt: Date
      updatedAt: Date
      disciplinaId: string
    }, ExtArgs["result"]["horarioEstudo"]>
    composites: {}
  }

  type HorarioEstudoGetPayload<S extends boolean | null | undefined | HorarioEstudoDefaultArgs> = $Result.GetResult<Prisma.$HorarioEstudoPayload, S>

  type HorarioEstudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorarioEstudoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorarioEstudoCountAggregateInputType | true
    }

  export interface HorarioEstudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorarioEstudo'], meta: { name: 'HorarioEstudo' } }
    /**
     * Find zero or one HorarioEstudo that matches the filter.
     * @param {HorarioEstudoFindUniqueArgs} args - Arguments to find a HorarioEstudo
     * @example
     * // Get one HorarioEstudo
     * const horarioEstudo = await prisma.horarioEstudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioEstudoFindUniqueArgs>(args: SelectSubset<T, HorarioEstudoFindUniqueArgs<ExtArgs>>): Prisma__HorarioEstudoClient<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorarioEstudo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioEstudoFindUniqueOrThrowArgs} args - Arguments to find a HorarioEstudo
     * @example
     * // Get one HorarioEstudo
     * const horarioEstudo = await prisma.horarioEstudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioEstudoFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioEstudoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioEstudoClient<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioEstudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioEstudoFindFirstArgs} args - Arguments to find a HorarioEstudo
     * @example
     * // Get one HorarioEstudo
     * const horarioEstudo = await prisma.horarioEstudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioEstudoFindFirstArgs>(args?: SelectSubset<T, HorarioEstudoFindFirstArgs<ExtArgs>>): Prisma__HorarioEstudoClient<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioEstudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioEstudoFindFirstOrThrowArgs} args - Arguments to find a HorarioEstudo
     * @example
     * // Get one HorarioEstudo
     * const horarioEstudo = await prisma.horarioEstudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioEstudoFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioEstudoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioEstudoClient<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorarioEstudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioEstudoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorarioEstudos
     * const horarioEstudos = await prisma.horarioEstudo.findMany()
     * 
     * // Get first 10 HorarioEstudos
     * const horarioEstudos = await prisma.horarioEstudo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioEstudoWithIdOnly = await prisma.horarioEstudo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioEstudoFindManyArgs>(args?: SelectSubset<T, HorarioEstudoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorarioEstudo.
     * @param {HorarioEstudoCreateArgs} args - Arguments to create a HorarioEstudo.
     * @example
     * // Create one HorarioEstudo
     * const HorarioEstudo = await prisma.horarioEstudo.create({
     *   data: {
     *     // ... data to create a HorarioEstudo
     *   }
     * })
     * 
     */
    create<T extends HorarioEstudoCreateArgs>(args: SelectSubset<T, HorarioEstudoCreateArgs<ExtArgs>>): Prisma__HorarioEstudoClient<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorarioEstudos.
     * @param {HorarioEstudoCreateManyArgs} args - Arguments to create many HorarioEstudos.
     * @example
     * // Create many HorarioEstudos
     * const horarioEstudo = await prisma.horarioEstudo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioEstudoCreateManyArgs>(args?: SelectSubset<T, HorarioEstudoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorarioEstudos and returns the data saved in the database.
     * @param {HorarioEstudoCreateManyAndReturnArgs} args - Arguments to create many HorarioEstudos.
     * @example
     * // Create many HorarioEstudos
     * const horarioEstudo = await prisma.horarioEstudo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorarioEstudos and only return the `id`
     * const horarioEstudoWithIdOnly = await prisma.horarioEstudo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorarioEstudoCreateManyAndReturnArgs>(args?: SelectSubset<T, HorarioEstudoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorarioEstudo.
     * @param {HorarioEstudoDeleteArgs} args - Arguments to delete one HorarioEstudo.
     * @example
     * // Delete one HorarioEstudo
     * const HorarioEstudo = await prisma.horarioEstudo.delete({
     *   where: {
     *     // ... filter to delete one HorarioEstudo
     *   }
     * })
     * 
     */
    delete<T extends HorarioEstudoDeleteArgs>(args: SelectSubset<T, HorarioEstudoDeleteArgs<ExtArgs>>): Prisma__HorarioEstudoClient<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorarioEstudo.
     * @param {HorarioEstudoUpdateArgs} args - Arguments to update one HorarioEstudo.
     * @example
     * // Update one HorarioEstudo
     * const horarioEstudo = await prisma.horarioEstudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioEstudoUpdateArgs>(args: SelectSubset<T, HorarioEstudoUpdateArgs<ExtArgs>>): Prisma__HorarioEstudoClient<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorarioEstudos.
     * @param {HorarioEstudoDeleteManyArgs} args - Arguments to filter HorarioEstudos to delete.
     * @example
     * // Delete a few HorarioEstudos
     * const { count } = await prisma.horarioEstudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioEstudoDeleteManyArgs>(args?: SelectSubset<T, HorarioEstudoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioEstudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioEstudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorarioEstudos
     * const horarioEstudo = await prisma.horarioEstudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioEstudoUpdateManyArgs>(args: SelectSubset<T, HorarioEstudoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioEstudos and returns the data updated in the database.
     * @param {HorarioEstudoUpdateManyAndReturnArgs} args - Arguments to update many HorarioEstudos.
     * @example
     * // Update many HorarioEstudos
     * const horarioEstudo = await prisma.horarioEstudo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorarioEstudos and only return the `id`
     * const horarioEstudoWithIdOnly = await prisma.horarioEstudo.updateManyAndReturn({
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
    updateManyAndReturn<T extends HorarioEstudoUpdateManyAndReturnArgs>(args: SelectSubset<T, HorarioEstudoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorarioEstudo.
     * @param {HorarioEstudoUpsertArgs} args - Arguments to update or create a HorarioEstudo.
     * @example
     * // Update or create a HorarioEstudo
     * const horarioEstudo = await prisma.horarioEstudo.upsert({
     *   create: {
     *     // ... data to create a HorarioEstudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorarioEstudo we want to update
     *   }
     * })
     */
    upsert<T extends HorarioEstudoUpsertArgs>(args: SelectSubset<T, HorarioEstudoUpsertArgs<ExtArgs>>): Prisma__HorarioEstudoClient<$Result.GetResult<Prisma.$HorarioEstudoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorarioEstudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioEstudoCountArgs} args - Arguments to filter HorarioEstudos to count.
     * @example
     * // Count the number of HorarioEstudos
     * const count = await prisma.horarioEstudo.count({
     *   where: {
     *     // ... the filter for the HorarioEstudos we want to count
     *   }
     * })
    **/
    count<T extends HorarioEstudoCountArgs>(
      args?: Subset<T, HorarioEstudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioEstudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorarioEstudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioEstudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorarioEstudoAggregateArgs>(args: Subset<T, HorarioEstudoAggregateArgs>): Prisma.PrismaPromise<GetHorarioEstudoAggregateType<T>>

    /**
     * Group by HorarioEstudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioEstudoGroupByArgs} args - Group by arguments.
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
      T extends HorarioEstudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioEstudoGroupByArgs['orderBy'] }
        : { orderBy?: HorarioEstudoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HorarioEstudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioEstudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorarioEstudo model
   */
  readonly fields: HorarioEstudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorarioEstudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioEstudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HorarioEstudo model
   */
  interface HorarioEstudoFieldRefs {
    readonly id: FieldRef<"HorarioEstudo", 'String'>
    readonly diaSemana: FieldRef<"HorarioEstudo", 'Int'>
    readonly inicio: FieldRef<"HorarioEstudo", 'String'>
    readonly fim: FieldRef<"HorarioEstudo", 'String'>
    readonly ativo: FieldRef<"HorarioEstudo", 'Boolean'>
    readonly createdAt: FieldRef<"HorarioEstudo", 'DateTime'>
    readonly updatedAt: FieldRef<"HorarioEstudo", 'DateTime'>
    readonly disciplinaId: FieldRef<"HorarioEstudo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HorarioEstudo findUnique
   */
  export type HorarioEstudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioEstudo to fetch.
     */
    where: HorarioEstudoWhereUniqueInput
  }

  /**
   * HorarioEstudo findUniqueOrThrow
   */
  export type HorarioEstudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioEstudo to fetch.
     */
    where: HorarioEstudoWhereUniqueInput
  }

  /**
   * HorarioEstudo findFirst
   */
  export type HorarioEstudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioEstudo to fetch.
     */
    where?: HorarioEstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioEstudos to fetch.
     */
    orderBy?: HorarioEstudoOrderByWithRelationInput | HorarioEstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioEstudos.
     */
    cursor?: HorarioEstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioEstudos.
     */
    distinct?: HorarioEstudoScalarFieldEnum | HorarioEstudoScalarFieldEnum[]
  }

  /**
   * HorarioEstudo findFirstOrThrow
   */
  export type HorarioEstudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioEstudo to fetch.
     */
    where?: HorarioEstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioEstudos to fetch.
     */
    orderBy?: HorarioEstudoOrderByWithRelationInput | HorarioEstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioEstudos.
     */
    cursor?: HorarioEstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioEstudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioEstudos.
     */
    distinct?: HorarioEstudoScalarFieldEnum | HorarioEstudoScalarFieldEnum[]
  }

  /**
   * HorarioEstudo findMany
   */
  export type HorarioEstudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioEstudos to fetch.
     */
    where?: HorarioEstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioEstudos to fetch.
     */
    orderBy?: HorarioEstudoOrderByWithRelationInput | HorarioEstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorarioEstudos.
     */
    cursor?: HorarioEstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioEstudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioEstudos.
     */
    skip?: number
    distinct?: HorarioEstudoScalarFieldEnum | HorarioEstudoScalarFieldEnum[]
  }

  /**
   * HorarioEstudo create
   */
  export type HorarioEstudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * The data needed to create a HorarioEstudo.
     */
    data: XOR<HorarioEstudoCreateInput, HorarioEstudoUncheckedCreateInput>
  }

  /**
   * HorarioEstudo createMany
   */
  export type HorarioEstudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorarioEstudos.
     */
    data: HorarioEstudoCreateManyInput | HorarioEstudoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HorarioEstudo createManyAndReturn
   */
  export type HorarioEstudoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * The data used to create many HorarioEstudos.
     */
    data: HorarioEstudoCreateManyInput | HorarioEstudoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorarioEstudo update
   */
  export type HorarioEstudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * The data needed to update a HorarioEstudo.
     */
    data: XOR<HorarioEstudoUpdateInput, HorarioEstudoUncheckedUpdateInput>
    /**
     * Choose, which HorarioEstudo to update.
     */
    where: HorarioEstudoWhereUniqueInput
  }

  /**
   * HorarioEstudo updateMany
   */
  export type HorarioEstudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorarioEstudos.
     */
    data: XOR<HorarioEstudoUpdateManyMutationInput, HorarioEstudoUncheckedUpdateManyInput>
    /**
     * Filter which HorarioEstudos to update
     */
    where?: HorarioEstudoWhereInput
    /**
     * Limit how many HorarioEstudos to update.
     */
    limit?: number
  }

  /**
   * HorarioEstudo updateManyAndReturn
   */
  export type HorarioEstudoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * The data used to update HorarioEstudos.
     */
    data: XOR<HorarioEstudoUpdateManyMutationInput, HorarioEstudoUncheckedUpdateManyInput>
    /**
     * Filter which HorarioEstudos to update
     */
    where?: HorarioEstudoWhereInput
    /**
     * Limit how many HorarioEstudos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorarioEstudo upsert
   */
  export type HorarioEstudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * The filter to search for the HorarioEstudo to update in case it exists.
     */
    where: HorarioEstudoWhereUniqueInput
    /**
     * In case the HorarioEstudo found by the `where` argument doesn't exist, create a new HorarioEstudo with this data.
     */
    create: XOR<HorarioEstudoCreateInput, HorarioEstudoUncheckedCreateInput>
    /**
     * In case the HorarioEstudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioEstudoUpdateInput, HorarioEstudoUncheckedUpdateInput>
  }

  /**
   * HorarioEstudo delete
   */
  export type HorarioEstudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
    /**
     * Filter which HorarioEstudo to delete.
     */
    where: HorarioEstudoWhereUniqueInput
  }

  /**
   * HorarioEstudo deleteMany
   */
  export type HorarioEstudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioEstudos to delete
     */
    where?: HorarioEstudoWhereInput
    /**
     * Limit how many HorarioEstudos to delete.
     */
    limit?: number
  }

  /**
   * HorarioEstudo without action
   */
  export type HorarioEstudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioEstudo
     */
    select?: HorarioEstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioEstudo
     */
    omit?: HorarioEstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioEstudoInclude<ExtArgs> | null
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


  export const DailyDashboardScalarFieldEnum: {
    id: 'id',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    proximosConteudos: 'proximosConteudos'
  };

  export type DailyDashboardScalarFieldEnum = (typeof DailyDashboardScalarFieldEnum)[keyof typeof DailyDashboardScalarFieldEnum]


  export const ObjetivoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    completo: 'completo',
    dashboardId: 'dashboardId'
  };

  export type ObjetivoScalarFieldEnum = (typeof ObjetivoScalarFieldEnum)[keyof typeof ObjetivoScalarFieldEnum]


  export const AtividadeScalarFieldEnum: {
    id: 'id',
    horario: 'horario',
    atividade: 'atividade',
    status: 'status',
    dashboardId: 'dashboardId',
    disciplinaId: 'disciplinaId'
  };

  export type AtividadeScalarFieldEnum = (typeof AtividadeScalarFieldEnum)[keyof typeof AtividadeScalarFieldEnum]


  export const MetricaDisciplinaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    progresso: 'progresso',
    cor: 'cor',
    dashboardId: 'dashboardId',
    disciplinaId: 'disciplinaId'
  };

  export type MetricaDisciplinaScalarFieldEnum = (typeof MetricaDisciplinaScalarFieldEnum)[keyof typeof MetricaDisciplinaScalarFieldEnum]


  export const HistoricoProgressoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    progresso: 'progresso',
    observacoes: 'observacoes',
    disciplinaId: 'disciplinaId'
  };

  export type HistoricoProgressoScalarFieldEnum = (typeof HistoricoProgressoScalarFieldEnum)[keyof typeof HistoricoProgressoScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cor: 'cor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const ConteudoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    ordem: 'ordem',
    completo: 'completo',
    disciplinaId: 'disciplinaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConteudoScalarFieldEnum = (typeof ConteudoScalarFieldEnum)[keyof typeof ConteudoScalarFieldEnum]


  export const HorarioEstudoScalarFieldEnum: {
    id: 'id',
    diaSemana: 'diaSemana',
    inicio: 'inicio',
    fim: 'fim',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    disciplinaId: 'disciplinaId'
  };

  export type HorarioEstudoScalarFieldEnum = (typeof HorarioEstudoScalarFieldEnum)[keyof typeof HorarioEstudoScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AtividadeStatus'
   */
  export type EnumAtividadeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AtividadeStatus'>
    


  /**
   * Reference to a field of type 'AtividadeStatus[]'
   */
  export type ListEnumAtividadeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AtividadeStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type DailyDashboardWhereInput = {
    AND?: DailyDashboardWhereInput | DailyDashboardWhereInput[]
    OR?: DailyDashboardWhereInput[]
    NOT?: DailyDashboardWhereInput | DailyDashboardWhereInput[]
    id?: StringFilter<"DailyDashboard"> | string
    date?: DateTimeFilter<"DailyDashboard"> | Date | string
    createdAt?: DateTimeFilter<"DailyDashboard"> | Date | string
    updatedAt?: DateTimeFilter<"DailyDashboard"> | Date | string
    proximosConteudos?: StringNullableListFilter<"DailyDashboard">
    objetivos?: ObjetivoListRelationFilter
    cronograma?: AtividadeListRelationFilter
    metricas?: MetricaDisciplinaListRelationFilter
  }

  export type DailyDashboardOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    proximosConteudos?: SortOrder
    objetivos?: ObjetivoOrderByRelationAggregateInput
    cronograma?: AtividadeOrderByRelationAggregateInput
    metricas?: MetricaDisciplinaOrderByRelationAggregateInput
  }

  export type DailyDashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: Date | string
    AND?: DailyDashboardWhereInput | DailyDashboardWhereInput[]
    OR?: DailyDashboardWhereInput[]
    NOT?: DailyDashboardWhereInput | DailyDashboardWhereInput[]
    createdAt?: DateTimeFilter<"DailyDashboard"> | Date | string
    updatedAt?: DateTimeFilter<"DailyDashboard"> | Date | string
    proximosConteudos?: StringNullableListFilter<"DailyDashboard">
    objetivos?: ObjetivoListRelationFilter
    cronograma?: AtividadeListRelationFilter
    metricas?: MetricaDisciplinaListRelationFilter
  }, "id" | "date">

  export type DailyDashboardOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    proximosConteudos?: SortOrder
    _count?: DailyDashboardCountOrderByAggregateInput
    _max?: DailyDashboardMaxOrderByAggregateInput
    _min?: DailyDashboardMinOrderByAggregateInput
  }

  export type DailyDashboardScalarWhereWithAggregatesInput = {
    AND?: DailyDashboardScalarWhereWithAggregatesInput | DailyDashboardScalarWhereWithAggregatesInput[]
    OR?: DailyDashboardScalarWhereWithAggregatesInput[]
    NOT?: DailyDashboardScalarWhereWithAggregatesInput | DailyDashboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyDashboard"> | string
    date?: DateTimeWithAggregatesFilter<"DailyDashboard"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyDashboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyDashboard"> | Date | string
    proximosConteudos?: StringNullableListFilter<"DailyDashboard">
  }

  export type ObjetivoWhereInput = {
    AND?: ObjetivoWhereInput | ObjetivoWhereInput[]
    OR?: ObjetivoWhereInput[]
    NOT?: ObjetivoWhereInput | ObjetivoWhereInput[]
    id?: StringFilter<"Objetivo"> | string
    descricao?: StringFilter<"Objetivo"> | string
    completo?: BoolFilter<"Objetivo"> | boolean
    dashboardId?: StringFilter<"Objetivo"> | string
    dashboard?: XOR<DailyDashboardScalarRelationFilter, DailyDashboardWhereInput>
  }

  export type ObjetivoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    completo?: SortOrder
    dashboardId?: SortOrder
    dashboard?: DailyDashboardOrderByWithRelationInput
  }

  export type ObjetivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObjetivoWhereInput | ObjetivoWhereInput[]
    OR?: ObjetivoWhereInput[]
    NOT?: ObjetivoWhereInput | ObjetivoWhereInput[]
    descricao?: StringFilter<"Objetivo"> | string
    completo?: BoolFilter<"Objetivo"> | boolean
    dashboardId?: StringFilter<"Objetivo"> | string
    dashboard?: XOR<DailyDashboardScalarRelationFilter, DailyDashboardWhereInput>
  }, "id">

  export type ObjetivoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    completo?: SortOrder
    dashboardId?: SortOrder
    _count?: ObjetivoCountOrderByAggregateInput
    _max?: ObjetivoMaxOrderByAggregateInput
    _min?: ObjetivoMinOrderByAggregateInput
  }

  export type ObjetivoScalarWhereWithAggregatesInput = {
    AND?: ObjetivoScalarWhereWithAggregatesInput | ObjetivoScalarWhereWithAggregatesInput[]
    OR?: ObjetivoScalarWhereWithAggregatesInput[]
    NOT?: ObjetivoScalarWhereWithAggregatesInput | ObjetivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Objetivo"> | string
    descricao?: StringWithAggregatesFilter<"Objetivo"> | string
    completo?: BoolWithAggregatesFilter<"Objetivo"> | boolean
    dashboardId?: StringWithAggregatesFilter<"Objetivo"> | string
  }

  export type AtividadeWhereInput = {
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    id?: StringFilter<"Atividade"> | string
    horario?: StringFilter<"Atividade"> | string
    atividade?: StringFilter<"Atividade"> | string
    status?: EnumAtividadeStatusFilter<"Atividade"> | $Enums.AtividadeStatus
    dashboardId?: StringFilter<"Atividade"> | string
    disciplinaId?: StringNullableFilter<"Atividade"> | string | null
    dashboard?: XOR<DailyDashboardScalarRelationFilter, DailyDashboardWhereInput>
    disciplina?: XOR<DisciplinaNullableScalarRelationFilter, DisciplinaWhereInput> | null
  }

  export type AtividadeOrderByWithRelationInput = {
    id?: SortOrder
    horario?: SortOrder
    atividade?: SortOrder
    status?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrderInput | SortOrder
    dashboard?: DailyDashboardOrderByWithRelationInput
    disciplina?: DisciplinaOrderByWithRelationInput
  }

  export type AtividadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    horario?: StringFilter<"Atividade"> | string
    atividade?: StringFilter<"Atividade"> | string
    status?: EnumAtividadeStatusFilter<"Atividade"> | $Enums.AtividadeStatus
    dashboardId?: StringFilter<"Atividade"> | string
    disciplinaId?: StringNullableFilter<"Atividade"> | string | null
    dashboard?: XOR<DailyDashboardScalarRelationFilter, DailyDashboardWhereInput>
    disciplina?: XOR<DisciplinaNullableScalarRelationFilter, DisciplinaWhereInput> | null
  }, "id">

  export type AtividadeOrderByWithAggregationInput = {
    id?: SortOrder
    horario?: SortOrder
    atividade?: SortOrder
    status?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrderInput | SortOrder
    _count?: AtividadeCountOrderByAggregateInput
    _max?: AtividadeMaxOrderByAggregateInput
    _min?: AtividadeMinOrderByAggregateInput
  }

  export type AtividadeScalarWhereWithAggregatesInput = {
    AND?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    OR?: AtividadeScalarWhereWithAggregatesInput[]
    NOT?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atividade"> | string
    horario?: StringWithAggregatesFilter<"Atividade"> | string
    atividade?: StringWithAggregatesFilter<"Atividade"> | string
    status?: EnumAtividadeStatusWithAggregatesFilter<"Atividade"> | $Enums.AtividadeStatus
    dashboardId?: StringWithAggregatesFilter<"Atividade"> | string
    disciplinaId?: StringNullableWithAggregatesFilter<"Atividade"> | string | null
  }

  export type MetricaDisciplinaWhereInput = {
    AND?: MetricaDisciplinaWhereInput | MetricaDisciplinaWhereInput[]
    OR?: MetricaDisciplinaWhereInput[]
    NOT?: MetricaDisciplinaWhereInput | MetricaDisciplinaWhereInput[]
    id?: StringFilter<"MetricaDisciplina"> | string
    nome?: StringFilter<"MetricaDisciplina"> | string
    progresso?: IntFilter<"MetricaDisciplina"> | number
    cor?: StringFilter<"MetricaDisciplina"> | string
    dashboardId?: StringFilter<"MetricaDisciplina"> | string
    disciplinaId?: StringNullableFilter<"MetricaDisciplina"> | string | null
    dashboard?: XOR<DailyDashboardScalarRelationFilter, DailyDashboardWhereInput>
    disciplina?: XOR<DisciplinaNullableScalarRelationFilter, DisciplinaWhereInput> | null
    historico?: HistoricoProgressoListRelationFilter
  }

  export type MetricaDisciplinaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    progresso?: SortOrder
    cor?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrderInput | SortOrder
    dashboard?: DailyDashboardOrderByWithRelationInput
    disciplina?: DisciplinaOrderByWithRelationInput
    historico?: HistoricoProgressoOrderByRelationAggregateInput
  }

  export type MetricaDisciplinaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetricaDisciplinaWhereInput | MetricaDisciplinaWhereInput[]
    OR?: MetricaDisciplinaWhereInput[]
    NOT?: MetricaDisciplinaWhereInput | MetricaDisciplinaWhereInput[]
    nome?: StringFilter<"MetricaDisciplina"> | string
    progresso?: IntFilter<"MetricaDisciplina"> | number
    cor?: StringFilter<"MetricaDisciplina"> | string
    dashboardId?: StringFilter<"MetricaDisciplina"> | string
    disciplinaId?: StringNullableFilter<"MetricaDisciplina"> | string | null
    dashboard?: XOR<DailyDashboardScalarRelationFilter, DailyDashboardWhereInput>
    disciplina?: XOR<DisciplinaNullableScalarRelationFilter, DisciplinaWhereInput> | null
    historico?: HistoricoProgressoListRelationFilter
  }, "id">

  export type MetricaDisciplinaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    progresso?: SortOrder
    cor?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrderInput | SortOrder
    _count?: MetricaDisciplinaCountOrderByAggregateInput
    _avg?: MetricaDisciplinaAvgOrderByAggregateInput
    _max?: MetricaDisciplinaMaxOrderByAggregateInput
    _min?: MetricaDisciplinaMinOrderByAggregateInput
    _sum?: MetricaDisciplinaSumOrderByAggregateInput
  }

  export type MetricaDisciplinaScalarWhereWithAggregatesInput = {
    AND?: MetricaDisciplinaScalarWhereWithAggregatesInput | MetricaDisciplinaScalarWhereWithAggregatesInput[]
    OR?: MetricaDisciplinaScalarWhereWithAggregatesInput[]
    NOT?: MetricaDisciplinaScalarWhereWithAggregatesInput | MetricaDisciplinaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetricaDisciplina"> | string
    nome?: StringWithAggregatesFilter<"MetricaDisciplina"> | string
    progresso?: IntWithAggregatesFilter<"MetricaDisciplina"> | number
    cor?: StringWithAggregatesFilter<"MetricaDisciplina"> | string
    dashboardId?: StringWithAggregatesFilter<"MetricaDisciplina"> | string
    disciplinaId?: StringNullableWithAggregatesFilter<"MetricaDisciplina"> | string | null
  }

  export type HistoricoProgressoWhereInput = {
    AND?: HistoricoProgressoWhereInput | HistoricoProgressoWhereInput[]
    OR?: HistoricoProgressoWhereInput[]
    NOT?: HistoricoProgressoWhereInput | HistoricoProgressoWhereInput[]
    id?: StringFilter<"HistoricoProgresso"> | string
    data?: DateTimeFilter<"HistoricoProgresso"> | Date | string
    progresso?: IntFilter<"HistoricoProgresso"> | number
    observacoes?: StringNullableFilter<"HistoricoProgresso"> | string | null
    disciplinaId?: StringFilter<"HistoricoProgresso"> | string
    disciplina?: XOR<MetricaDisciplinaScalarRelationFilter, MetricaDisciplinaWhereInput>
  }

  export type HistoricoProgressoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    progresso?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    disciplinaId?: SortOrder
    disciplina?: MetricaDisciplinaOrderByWithRelationInput
  }

  export type HistoricoProgressoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricoProgressoWhereInput | HistoricoProgressoWhereInput[]
    OR?: HistoricoProgressoWhereInput[]
    NOT?: HistoricoProgressoWhereInput | HistoricoProgressoWhereInput[]
    data?: DateTimeFilter<"HistoricoProgresso"> | Date | string
    progresso?: IntFilter<"HistoricoProgresso"> | number
    observacoes?: StringNullableFilter<"HistoricoProgresso"> | string | null
    disciplinaId?: StringFilter<"HistoricoProgresso"> | string
    disciplina?: XOR<MetricaDisciplinaScalarRelationFilter, MetricaDisciplinaWhereInput>
  }, "id">

  export type HistoricoProgressoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    progresso?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    disciplinaId?: SortOrder
    _count?: HistoricoProgressoCountOrderByAggregateInput
    _avg?: HistoricoProgressoAvgOrderByAggregateInput
    _max?: HistoricoProgressoMaxOrderByAggregateInput
    _min?: HistoricoProgressoMinOrderByAggregateInput
    _sum?: HistoricoProgressoSumOrderByAggregateInput
  }

  export type HistoricoProgressoScalarWhereWithAggregatesInput = {
    AND?: HistoricoProgressoScalarWhereWithAggregatesInput | HistoricoProgressoScalarWhereWithAggregatesInput[]
    OR?: HistoricoProgressoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoProgressoScalarWhereWithAggregatesInput | HistoricoProgressoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoricoProgresso"> | string
    data?: DateTimeWithAggregatesFilter<"HistoricoProgresso"> | Date | string
    progresso?: IntWithAggregatesFilter<"HistoricoProgresso"> | number
    observacoes?: StringNullableWithAggregatesFilter<"HistoricoProgresso"> | string | null
    disciplinaId?: StringWithAggregatesFilter<"HistoricoProgresso"> | string
  }

  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    id?: StringFilter<"Disciplina"> | string
    nome?: StringFilter<"Disciplina"> | string
    cor?: StringFilter<"Disciplina"> | string
    createdAt?: DateTimeFilter<"Disciplina"> | Date | string
    updatedAt?: DateTimeFilter<"Disciplina"> | Date | string
    conteudos?: ConteudoListRelationFilter
    metricas?: MetricaDisciplinaListRelationFilter
    atividades?: AtividadeListRelationFilter
    horarios?: HorarioEstudoListRelationFilter
  }

  export type DisciplinaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conteudos?: ConteudoOrderByRelationAggregateInput
    metricas?: MetricaDisciplinaOrderByRelationAggregateInput
    atividades?: AtividadeOrderByRelationAggregateInput
    horarios?: HorarioEstudoOrderByRelationAggregateInput
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    nome?: StringFilter<"Disciplina"> | string
    cor?: StringFilter<"Disciplina"> | string
    createdAt?: DateTimeFilter<"Disciplina"> | Date | string
    updatedAt?: DateTimeFilter<"Disciplina"> | Date | string
    conteudos?: ConteudoListRelationFilter
    metricas?: MetricaDisciplinaListRelationFilter
    atividades?: AtividadeListRelationFilter
    horarios?: HorarioEstudoListRelationFilter
  }, "id">

  export type DisciplinaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisciplinaCountOrderByAggregateInput
    _max?: DisciplinaMaxOrderByAggregateInput
    _min?: DisciplinaMinOrderByAggregateInput
  }

  export type DisciplinaScalarWhereWithAggregatesInput = {
    AND?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    OR?: DisciplinaScalarWhereWithAggregatesInput[]
    NOT?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Disciplina"> | string
    nome?: StringWithAggregatesFilter<"Disciplina"> | string
    cor?: StringWithAggregatesFilter<"Disciplina"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Disciplina"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Disciplina"> | Date | string
  }

  export type ConteudoWhereInput = {
    AND?: ConteudoWhereInput | ConteudoWhereInput[]
    OR?: ConteudoWhereInput[]
    NOT?: ConteudoWhereInput | ConteudoWhereInput[]
    id?: StringFilter<"Conteudo"> | string
    titulo?: StringFilter<"Conteudo"> | string
    descricao?: StringNullableFilter<"Conteudo"> | string | null
    ordem?: IntFilter<"Conteudo"> | number
    completo?: BoolFilter<"Conteudo"> | boolean
    disciplinaId?: StringFilter<"Conteudo"> | string
    createdAt?: DateTimeFilter<"Conteudo"> | Date | string
    updatedAt?: DateTimeFilter<"Conteudo"> | Date | string
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }

  export type ConteudoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ordem?: SortOrder
    completo?: SortOrder
    disciplinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplina?: DisciplinaOrderByWithRelationInput
  }

  export type ConteudoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConteudoWhereInput | ConteudoWhereInput[]
    OR?: ConteudoWhereInput[]
    NOT?: ConteudoWhereInput | ConteudoWhereInput[]
    titulo?: StringFilter<"Conteudo"> | string
    descricao?: StringNullableFilter<"Conteudo"> | string | null
    ordem?: IntFilter<"Conteudo"> | number
    completo?: BoolFilter<"Conteudo"> | boolean
    disciplinaId?: StringFilter<"Conteudo"> | string
    createdAt?: DateTimeFilter<"Conteudo"> | Date | string
    updatedAt?: DateTimeFilter<"Conteudo"> | Date | string
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }, "id">

  export type ConteudoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ordem?: SortOrder
    completo?: SortOrder
    disciplinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConteudoCountOrderByAggregateInput
    _avg?: ConteudoAvgOrderByAggregateInput
    _max?: ConteudoMaxOrderByAggregateInput
    _min?: ConteudoMinOrderByAggregateInput
    _sum?: ConteudoSumOrderByAggregateInput
  }

  export type ConteudoScalarWhereWithAggregatesInput = {
    AND?: ConteudoScalarWhereWithAggregatesInput | ConteudoScalarWhereWithAggregatesInput[]
    OR?: ConteudoScalarWhereWithAggregatesInput[]
    NOT?: ConteudoScalarWhereWithAggregatesInput | ConteudoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conteudo"> | string
    titulo?: StringWithAggregatesFilter<"Conteudo"> | string
    descricao?: StringNullableWithAggregatesFilter<"Conteudo"> | string | null
    ordem?: IntWithAggregatesFilter<"Conteudo"> | number
    completo?: BoolWithAggregatesFilter<"Conteudo"> | boolean
    disciplinaId?: StringWithAggregatesFilter<"Conteudo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conteudo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conteudo"> | Date | string
  }

  export type HorarioEstudoWhereInput = {
    AND?: HorarioEstudoWhereInput | HorarioEstudoWhereInput[]
    OR?: HorarioEstudoWhereInput[]
    NOT?: HorarioEstudoWhereInput | HorarioEstudoWhereInput[]
    id?: StringFilter<"HorarioEstudo"> | string
    diaSemana?: IntFilter<"HorarioEstudo"> | number
    inicio?: StringFilter<"HorarioEstudo"> | string
    fim?: StringFilter<"HorarioEstudo"> | string
    ativo?: BoolFilter<"HorarioEstudo"> | boolean
    createdAt?: DateTimeFilter<"HorarioEstudo"> | Date | string
    updatedAt?: DateTimeFilter<"HorarioEstudo"> | Date | string
    disciplinaId?: StringFilter<"HorarioEstudo"> | string
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }

  export type HorarioEstudoOrderByWithRelationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplinaId?: SortOrder
    disciplina?: DisciplinaOrderByWithRelationInput
  }

  export type HorarioEstudoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HorarioEstudoWhereInput | HorarioEstudoWhereInput[]
    OR?: HorarioEstudoWhereInput[]
    NOT?: HorarioEstudoWhereInput | HorarioEstudoWhereInput[]
    diaSemana?: IntFilter<"HorarioEstudo"> | number
    inicio?: StringFilter<"HorarioEstudo"> | string
    fim?: StringFilter<"HorarioEstudo"> | string
    ativo?: BoolFilter<"HorarioEstudo"> | boolean
    createdAt?: DateTimeFilter<"HorarioEstudo"> | Date | string
    updatedAt?: DateTimeFilter<"HorarioEstudo"> | Date | string
    disciplinaId?: StringFilter<"HorarioEstudo"> | string
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }, "id">

  export type HorarioEstudoOrderByWithAggregationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplinaId?: SortOrder
    _count?: HorarioEstudoCountOrderByAggregateInput
    _avg?: HorarioEstudoAvgOrderByAggregateInput
    _max?: HorarioEstudoMaxOrderByAggregateInput
    _min?: HorarioEstudoMinOrderByAggregateInput
    _sum?: HorarioEstudoSumOrderByAggregateInput
  }

  export type HorarioEstudoScalarWhereWithAggregatesInput = {
    AND?: HorarioEstudoScalarWhereWithAggregatesInput | HorarioEstudoScalarWhereWithAggregatesInput[]
    OR?: HorarioEstudoScalarWhereWithAggregatesInput[]
    NOT?: HorarioEstudoScalarWhereWithAggregatesInput | HorarioEstudoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorarioEstudo"> | string
    diaSemana?: IntWithAggregatesFilter<"HorarioEstudo"> | number
    inicio?: StringWithAggregatesFilter<"HorarioEstudo"> | string
    fim?: StringWithAggregatesFilter<"HorarioEstudo"> | string
    ativo?: BoolWithAggregatesFilter<"HorarioEstudo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HorarioEstudo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HorarioEstudo"> | Date | string
    disciplinaId?: StringWithAggregatesFilter<"HorarioEstudo"> | string
  }

  export type DailyDashboardCreateInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
    objetivos?: ObjetivoCreateNestedManyWithoutDashboardInput
    cronograma?: AtividadeCreateNestedManyWithoutDashboardInput
    metricas?: MetricaDisciplinaCreateNestedManyWithoutDashboardInput
  }

  export type DailyDashboardUncheckedCreateInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
    objetivos?: ObjetivoUncheckedCreateNestedManyWithoutDashboardInput
    cronograma?: AtividadeUncheckedCreateNestedManyWithoutDashboardInput
    metricas?: MetricaDisciplinaUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DailyDashboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
    objetivos?: ObjetivoUpdateManyWithoutDashboardNestedInput
    cronograma?: AtividadeUpdateManyWithoutDashboardNestedInput
    metricas?: MetricaDisciplinaUpdateManyWithoutDashboardNestedInput
  }

  export type DailyDashboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
    objetivos?: ObjetivoUncheckedUpdateManyWithoutDashboardNestedInput
    cronograma?: AtividadeUncheckedUpdateManyWithoutDashboardNestedInput
    metricas?: MetricaDisciplinaUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DailyDashboardCreateManyInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
  }

  export type DailyDashboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
  }

  export type DailyDashboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
  }

  export type ObjetivoCreateInput = {
    id?: string
    descricao: string
    completo?: boolean
    dashboard: DailyDashboardCreateNestedOneWithoutObjetivosInput
  }

  export type ObjetivoUncheckedCreateInput = {
    id?: string
    descricao: string
    completo?: boolean
    dashboardId: string
  }

  export type ObjetivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    completo?: BoolFieldUpdateOperationsInput | boolean
    dashboard?: DailyDashboardUpdateOneRequiredWithoutObjetivosNestedInput
  }

  export type ObjetivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    completo?: BoolFieldUpdateOperationsInput | boolean
    dashboardId?: StringFieldUpdateOperationsInput | string
  }

  export type ObjetivoCreateManyInput = {
    id?: string
    descricao: string
    completo?: boolean
    dashboardId: string
  }

  export type ObjetivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    completo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObjetivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    completo?: BoolFieldUpdateOperationsInput | boolean
    dashboardId?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeCreateInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    dashboard: DailyDashboardCreateNestedOneWithoutCronogramaInput
    disciplina?: DisciplinaCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    dashboardId: string
    disciplinaId?: string | null
  }

  export type AtividadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    dashboard?: DailyDashboardUpdateOneRequiredWithoutCronogramaNestedInput
    disciplina?: DisciplinaUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    dashboardId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeCreateManyInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    dashboardId: string
    disciplinaId?: string | null
  }

  export type AtividadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
  }

  export type AtividadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    dashboardId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetricaDisciplinaCreateInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    dashboard: DailyDashboardCreateNestedOneWithoutMetricasInput
    disciplina?: DisciplinaCreateNestedOneWithoutMetricasInput
    historico?: HistoricoProgressoCreateNestedManyWithoutDisciplinaInput
  }

  export type MetricaDisciplinaUncheckedCreateInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    dashboardId: string
    disciplinaId?: string | null
    historico?: HistoricoProgressoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type MetricaDisciplinaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    dashboard?: DailyDashboardUpdateOneRequiredWithoutMetricasNestedInput
    disciplina?: DisciplinaUpdateOneWithoutMetricasNestedInput
    historico?: HistoricoProgressoUpdateManyWithoutDisciplinaNestedInput
  }

  export type MetricaDisciplinaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
    historico?: HistoricoProgressoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type MetricaDisciplinaCreateManyInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    dashboardId: string
    disciplinaId?: string | null
  }

  export type MetricaDisciplinaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
  }

  export type MetricaDisciplinaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoProgressoCreateInput = {
    id?: string
    data?: Date | string
    progresso: number
    observacoes?: string | null
    disciplina: MetricaDisciplinaCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoProgressoUncheckedCreateInput = {
    id?: string
    data?: Date | string
    progresso: number
    observacoes?: string | null
    disciplinaId: string
  }

  export type HistoricoProgressoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    progresso?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    disciplina?: MetricaDisciplinaUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoProgressoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    progresso?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    disciplinaId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoProgressoCreateManyInput = {
    id?: string
    data?: Date | string
    progresso: number
    observacoes?: string | null
    disciplinaId: string
  }

  export type HistoricoProgressoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    progresso?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoProgressoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    progresso?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    disciplinaId?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaCreateInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conteudos?: ConteudoCreateNestedManyWithoutDisciplinaInput
    metricas?: MetricaDisciplinaCreateNestedManyWithoutDisciplinaInput
    atividades?: AtividadeCreateNestedManyWithoutDisciplinaInput
    horarios?: HorarioEstudoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conteudos?: ConteudoUncheckedCreateNestedManyWithoutDisciplinaInput
    metricas?: MetricaDisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutDisciplinaInput
    horarios?: HorarioEstudoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudos?: ConteudoUpdateManyWithoutDisciplinaNestedInput
    metricas?: MetricaDisciplinaUpdateManyWithoutDisciplinaNestedInput
    atividades?: AtividadeUpdateManyWithoutDisciplinaNestedInput
    horarios?: HorarioEstudoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudos?: ConteudoUncheckedUpdateManyWithoutDisciplinaNestedInput
    metricas?: MetricaDisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutDisciplinaNestedInput
    horarios?: HorarioEstudoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaCreateManyInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplinaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplinaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConteudoCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem: number
    completo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplina: DisciplinaCreateNestedOneWithoutConteudosInput
  }

  export type ConteudoUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem: number
    completo?: boolean
    disciplinaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConteudoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    completo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplina?: DisciplinaUpdateOneRequiredWithoutConteudosNestedInput
  }

  export type ConteudoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    completo?: BoolFieldUpdateOperationsInput | boolean
    disciplinaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConteudoCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem: number
    completo?: boolean
    disciplinaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConteudoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    completo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConteudoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    completo?: BoolFieldUpdateOperationsInput | boolean
    disciplinaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioEstudoCreateInput = {
    id?: string
    diaSemana: number
    inicio: string
    fim: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplina: DisciplinaCreateNestedOneWithoutHorariosInput
  }

  export type HorarioEstudoUncheckedCreateInput = {
    id?: string
    diaSemana: number
    inicio: string
    fim: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplinaId: string
  }

  export type HorarioEstudoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    inicio?: StringFieldUpdateOperationsInput | string
    fim?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplina?: DisciplinaUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioEstudoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    inicio?: StringFieldUpdateOperationsInput | string
    fim?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplinaId?: StringFieldUpdateOperationsInput | string
  }

  export type HorarioEstudoCreateManyInput = {
    id?: string
    diaSemana: number
    inicio: string
    fim: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    disciplinaId: string
  }

  export type HorarioEstudoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    inicio?: StringFieldUpdateOperationsInput | string
    fim?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioEstudoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    inicio?: StringFieldUpdateOperationsInput | string
    fim?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplinaId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ObjetivoListRelationFilter = {
    every?: ObjetivoWhereInput
    some?: ObjetivoWhereInput
    none?: ObjetivoWhereInput
  }

  export type AtividadeListRelationFilter = {
    every?: AtividadeWhereInput
    some?: AtividadeWhereInput
    none?: AtividadeWhereInput
  }

  export type MetricaDisciplinaListRelationFilter = {
    every?: MetricaDisciplinaWhereInput
    some?: MetricaDisciplinaWhereInput
    none?: MetricaDisciplinaWhereInput
  }

  export type ObjetivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtividadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetricaDisciplinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyDashboardCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    proximosConteudos?: SortOrder
  }

  export type DailyDashboardMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyDashboardMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DailyDashboardScalarRelationFilter = {
    is?: DailyDashboardWhereInput
    isNot?: DailyDashboardWhereInput
  }

  export type ObjetivoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    completo?: SortOrder
    dashboardId?: SortOrder
  }

  export type ObjetivoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    completo?: SortOrder
    dashboardId?: SortOrder
  }

  export type ObjetivoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    completo?: SortOrder
    dashboardId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAtividadeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AtividadeStatus | EnumAtividadeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AtividadeStatus[] | ListEnumAtividadeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AtividadeStatus[] | ListEnumAtividadeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAtividadeStatusFilter<$PrismaModel> | $Enums.AtividadeStatus
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

  export type DisciplinaNullableScalarRelationFilter = {
    is?: DisciplinaWhereInput | null
    isNot?: DisciplinaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtividadeCountOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    atividade?: SortOrder
    status?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type AtividadeMaxOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    atividade?: SortOrder
    status?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type AtividadeMinOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    atividade?: SortOrder
    status?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type EnumAtividadeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AtividadeStatus | EnumAtividadeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AtividadeStatus[] | ListEnumAtividadeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AtividadeStatus[] | ListEnumAtividadeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAtividadeStatusWithAggregatesFilter<$PrismaModel> | $Enums.AtividadeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAtividadeStatusFilter<$PrismaModel>
    _max?: NestedEnumAtividadeStatusFilter<$PrismaModel>
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

  export type HistoricoProgressoListRelationFilter = {
    every?: HistoricoProgressoWhereInput
    some?: HistoricoProgressoWhereInput
    none?: HistoricoProgressoWhereInput
  }

  export type HistoricoProgressoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetricaDisciplinaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    progresso?: SortOrder
    cor?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type MetricaDisciplinaAvgOrderByAggregateInput = {
    progresso?: SortOrder
  }

  export type MetricaDisciplinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    progresso?: SortOrder
    cor?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type MetricaDisciplinaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    progresso?: SortOrder
    cor?: SortOrder
    dashboardId?: SortOrder
    disciplinaId?: SortOrder
  }

  export type MetricaDisciplinaSumOrderByAggregateInput = {
    progresso?: SortOrder
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

  export type MetricaDisciplinaScalarRelationFilter = {
    is?: MetricaDisciplinaWhereInput
    isNot?: MetricaDisciplinaWhereInput
  }

  export type HistoricoProgressoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    progresso?: SortOrder
    observacoes?: SortOrder
    disciplinaId?: SortOrder
  }

  export type HistoricoProgressoAvgOrderByAggregateInput = {
    progresso?: SortOrder
  }

  export type HistoricoProgressoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    progresso?: SortOrder
    observacoes?: SortOrder
    disciplinaId?: SortOrder
  }

  export type HistoricoProgressoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    progresso?: SortOrder
    observacoes?: SortOrder
    disciplinaId?: SortOrder
  }

  export type HistoricoProgressoSumOrderByAggregateInput = {
    progresso?: SortOrder
  }

  export type ConteudoListRelationFilter = {
    every?: ConteudoWhereInput
    some?: ConteudoWhereInput
    none?: ConteudoWhereInput
  }

  export type HorarioEstudoListRelationFilter = {
    every?: HorarioEstudoWhereInput
    some?: HorarioEstudoWhereInput
    none?: HorarioEstudoWhereInput
  }

  export type ConteudoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HorarioEstudoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplinaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplinaScalarRelationFilter = {
    is?: DisciplinaWhereInput
    isNot?: DisciplinaWhereInput
  }

  export type ConteudoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    completo?: SortOrder
    disciplinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConteudoAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type ConteudoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    completo?: SortOrder
    disciplinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConteudoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    completo?: SortOrder
    disciplinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConteudoSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type HorarioEstudoCountOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplinaId?: SortOrder
  }

  export type HorarioEstudoAvgOrderByAggregateInput = {
    diaSemana?: SortOrder
  }

  export type HorarioEstudoMaxOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplinaId?: SortOrder
  }

  export type HorarioEstudoMinOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disciplinaId?: SortOrder
  }

  export type HorarioEstudoSumOrderByAggregateInput = {
    diaSemana?: SortOrder
  }

  export type DailyDashboardCreateproximosConteudosInput = {
    set: string[]
  }

  export type ObjetivoCreateNestedManyWithoutDashboardInput = {
    create?: XOR<ObjetivoCreateWithoutDashboardInput, ObjetivoUncheckedCreateWithoutDashboardInput> | ObjetivoCreateWithoutDashboardInput[] | ObjetivoUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: ObjetivoCreateOrConnectWithoutDashboardInput | ObjetivoCreateOrConnectWithoutDashboardInput[]
    createMany?: ObjetivoCreateManyDashboardInputEnvelope
    connect?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutDashboardInput = {
    create?: XOR<AtividadeCreateWithoutDashboardInput, AtividadeUncheckedCreateWithoutDashboardInput> | AtividadeCreateWithoutDashboardInput[] | AtividadeUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutDashboardInput | AtividadeCreateOrConnectWithoutDashboardInput[]
    createMany?: AtividadeCreateManyDashboardInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type MetricaDisciplinaCreateNestedManyWithoutDashboardInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutDashboardInput, MetricaDisciplinaUncheckedCreateWithoutDashboardInput> | MetricaDisciplinaCreateWithoutDashboardInput[] | MetricaDisciplinaUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutDashboardInput | MetricaDisciplinaCreateOrConnectWithoutDashboardInput[]
    createMany?: MetricaDisciplinaCreateManyDashboardInputEnvelope
    connect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
  }

  export type ObjetivoUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<ObjetivoCreateWithoutDashboardInput, ObjetivoUncheckedCreateWithoutDashboardInput> | ObjetivoCreateWithoutDashboardInput[] | ObjetivoUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: ObjetivoCreateOrConnectWithoutDashboardInput | ObjetivoCreateOrConnectWithoutDashboardInput[]
    createMany?: ObjetivoCreateManyDashboardInputEnvelope
    connect?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<AtividadeCreateWithoutDashboardInput, AtividadeUncheckedCreateWithoutDashboardInput> | AtividadeCreateWithoutDashboardInput[] | AtividadeUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutDashboardInput | AtividadeCreateOrConnectWithoutDashboardInput[]
    createMany?: AtividadeCreateManyDashboardInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type MetricaDisciplinaUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutDashboardInput, MetricaDisciplinaUncheckedCreateWithoutDashboardInput> | MetricaDisciplinaCreateWithoutDashboardInput[] | MetricaDisciplinaUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutDashboardInput | MetricaDisciplinaCreateOrConnectWithoutDashboardInput[]
    createMany?: MetricaDisciplinaCreateManyDashboardInputEnvelope
    connect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DailyDashboardUpdateproximosConteudosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ObjetivoUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<ObjetivoCreateWithoutDashboardInput, ObjetivoUncheckedCreateWithoutDashboardInput> | ObjetivoCreateWithoutDashboardInput[] | ObjetivoUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: ObjetivoCreateOrConnectWithoutDashboardInput | ObjetivoCreateOrConnectWithoutDashboardInput[]
    upsert?: ObjetivoUpsertWithWhereUniqueWithoutDashboardInput | ObjetivoUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: ObjetivoCreateManyDashboardInputEnvelope
    set?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
    disconnect?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
    delete?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
    connect?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
    update?: ObjetivoUpdateWithWhereUniqueWithoutDashboardInput | ObjetivoUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: ObjetivoUpdateManyWithWhereWithoutDashboardInput | ObjetivoUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: ObjetivoScalarWhereInput | ObjetivoScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<AtividadeCreateWithoutDashboardInput, AtividadeUncheckedCreateWithoutDashboardInput> | AtividadeCreateWithoutDashboardInput[] | AtividadeUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutDashboardInput | AtividadeCreateOrConnectWithoutDashboardInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutDashboardInput | AtividadeUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: AtividadeCreateManyDashboardInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutDashboardInput | AtividadeUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutDashboardInput | AtividadeUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type MetricaDisciplinaUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutDashboardInput, MetricaDisciplinaUncheckedCreateWithoutDashboardInput> | MetricaDisciplinaCreateWithoutDashboardInput[] | MetricaDisciplinaUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutDashboardInput | MetricaDisciplinaCreateOrConnectWithoutDashboardInput[]
    upsert?: MetricaDisciplinaUpsertWithWhereUniqueWithoutDashboardInput | MetricaDisciplinaUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: MetricaDisciplinaCreateManyDashboardInputEnvelope
    set?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    disconnect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    delete?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    connect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    update?: MetricaDisciplinaUpdateWithWhereUniqueWithoutDashboardInput | MetricaDisciplinaUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: MetricaDisciplinaUpdateManyWithWhereWithoutDashboardInput | MetricaDisciplinaUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: MetricaDisciplinaScalarWhereInput | MetricaDisciplinaScalarWhereInput[]
  }

  export type ObjetivoUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<ObjetivoCreateWithoutDashboardInput, ObjetivoUncheckedCreateWithoutDashboardInput> | ObjetivoCreateWithoutDashboardInput[] | ObjetivoUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: ObjetivoCreateOrConnectWithoutDashboardInput | ObjetivoCreateOrConnectWithoutDashboardInput[]
    upsert?: ObjetivoUpsertWithWhereUniqueWithoutDashboardInput | ObjetivoUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: ObjetivoCreateManyDashboardInputEnvelope
    set?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
    disconnect?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
    delete?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
    connect?: ObjetivoWhereUniqueInput | ObjetivoWhereUniqueInput[]
    update?: ObjetivoUpdateWithWhereUniqueWithoutDashboardInput | ObjetivoUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: ObjetivoUpdateManyWithWhereWithoutDashboardInput | ObjetivoUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: ObjetivoScalarWhereInput | ObjetivoScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<AtividadeCreateWithoutDashboardInput, AtividadeUncheckedCreateWithoutDashboardInput> | AtividadeCreateWithoutDashboardInput[] | AtividadeUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutDashboardInput | AtividadeCreateOrConnectWithoutDashboardInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutDashboardInput | AtividadeUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: AtividadeCreateManyDashboardInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutDashboardInput | AtividadeUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutDashboardInput | AtividadeUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type MetricaDisciplinaUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutDashboardInput, MetricaDisciplinaUncheckedCreateWithoutDashboardInput> | MetricaDisciplinaCreateWithoutDashboardInput[] | MetricaDisciplinaUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutDashboardInput | MetricaDisciplinaCreateOrConnectWithoutDashboardInput[]
    upsert?: MetricaDisciplinaUpsertWithWhereUniqueWithoutDashboardInput | MetricaDisciplinaUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: MetricaDisciplinaCreateManyDashboardInputEnvelope
    set?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    disconnect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    delete?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    connect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    update?: MetricaDisciplinaUpdateWithWhereUniqueWithoutDashboardInput | MetricaDisciplinaUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: MetricaDisciplinaUpdateManyWithWhereWithoutDashboardInput | MetricaDisciplinaUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: MetricaDisciplinaScalarWhereInput | MetricaDisciplinaScalarWhereInput[]
  }

  export type DailyDashboardCreateNestedOneWithoutObjetivosInput = {
    create?: XOR<DailyDashboardCreateWithoutObjetivosInput, DailyDashboardUncheckedCreateWithoutObjetivosInput>
    connectOrCreate?: DailyDashboardCreateOrConnectWithoutObjetivosInput
    connect?: DailyDashboardWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DailyDashboardUpdateOneRequiredWithoutObjetivosNestedInput = {
    create?: XOR<DailyDashboardCreateWithoutObjetivosInput, DailyDashboardUncheckedCreateWithoutObjetivosInput>
    connectOrCreate?: DailyDashboardCreateOrConnectWithoutObjetivosInput
    upsert?: DailyDashboardUpsertWithoutObjetivosInput
    connect?: DailyDashboardWhereUniqueInput
    update?: XOR<XOR<DailyDashboardUpdateToOneWithWhereWithoutObjetivosInput, DailyDashboardUpdateWithoutObjetivosInput>, DailyDashboardUncheckedUpdateWithoutObjetivosInput>
  }

  export type DailyDashboardCreateNestedOneWithoutCronogramaInput = {
    create?: XOR<DailyDashboardCreateWithoutCronogramaInput, DailyDashboardUncheckedCreateWithoutCronogramaInput>
    connectOrCreate?: DailyDashboardCreateOrConnectWithoutCronogramaInput
    connect?: DailyDashboardWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<DisciplinaCreateWithoutAtividadesInput, DisciplinaUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutAtividadesInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type EnumAtividadeStatusFieldUpdateOperationsInput = {
    set?: $Enums.AtividadeStatus
  }

  export type DailyDashboardUpdateOneRequiredWithoutCronogramaNestedInput = {
    create?: XOR<DailyDashboardCreateWithoutCronogramaInput, DailyDashboardUncheckedCreateWithoutCronogramaInput>
    connectOrCreate?: DailyDashboardCreateOrConnectWithoutCronogramaInput
    upsert?: DailyDashboardUpsertWithoutCronogramaInput
    connect?: DailyDashboardWhereUniqueInput
    update?: XOR<XOR<DailyDashboardUpdateToOneWithWhereWithoutCronogramaInput, DailyDashboardUpdateWithoutCronogramaInput>, DailyDashboardUncheckedUpdateWithoutCronogramaInput>
  }

  export type DisciplinaUpdateOneWithoutAtividadesNestedInput = {
    create?: XOR<DisciplinaCreateWithoutAtividadesInput, DisciplinaUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutAtividadesInput
    upsert?: DisciplinaUpsertWithoutAtividadesInput
    disconnect?: DisciplinaWhereInput | boolean
    delete?: DisciplinaWhereInput | boolean
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutAtividadesInput, DisciplinaUpdateWithoutAtividadesInput>, DisciplinaUncheckedUpdateWithoutAtividadesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DailyDashboardCreateNestedOneWithoutMetricasInput = {
    create?: XOR<DailyDashboardCreateWithoutMetricasInput, DailyDashboardUncheckedCreateWithoutMetricasInput>
    connectOrCreate?: DailyDashboardCreateOrConnectWithoutMetricasInput
    connect?: DailyDashboardWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutMetricasInput = {
    create?: XOR<DisciplinaCreateWithoutMetricasInput, DisciplinaUncheckedCreateWithoutMetricasInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutMetricasInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type HistoricoProgressoCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<HistoricoProgressoCreateWithoutDisciplinaInput, HistoricoProgressoUncheckedCreateWithoutDisciplinaInput> | HistoricoProgressoCreateWithoutDisciplinaInput[] | HistoricoProgressoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: HistoricoProgressoCreateOrConnectWithoutDisciplinaInput | HistoricoProgressoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: HistoricoProgressoCreateManyDisciplinaInputEnvelope
    connect?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
  }

  export type HistoricoProgressoUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<HistoricoProgressoCreateWithoutDisciplinaInput, HistoricoProgressoUncheckedCreateWithoutDisciplinaInput> | HistoricoProgressoCreateWithoutDisciplinaInput[] | HistoricoProgressoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: HistoricoProgressoCreateOrConnectWithoutDisciplinaInput | HistoricoProgressoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: HistoricoProgressoCreateManyDisciplinaInputEnvelope
    connect?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailyDashboardUpdateOneRequiredWithoutMetricasNestedInput = {
    create?: XOR<DailyDashboardCreateWithoutMetricasInput, DailyDashboardUncheckedCreateWithoutMetricasInput>
    connectOrCreate?: DailyDashboardCreateOrConnectWithoutMetricasInput
    upsert?: DailyDashboardUpsertWithoutMetricasInput
    connect?: DailyDashboardWhereUniqueInput
    update?: XOR<XOR<DailyDashboardUpdateToOneWithWhereWithoutMetricasInput, DailyDashboardUpdateWithoutMetricasInput>, DailyDashboardUncheckedUpdateWithoutMetricasInput>
  }

  export type DisciplinaUpdateOneWithoutMetricasNestedInput = {
    create?: XOR<DisciplinaCreateWithoutMetricasInput, DisciplinaUncheckedCreateWithoutMetricasInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutMetricasInput
    upsert?: DisciplinaUpsertWithoutMetricasInput
    disconnect?: DisciplinaWhereInput | boolean
    delete?: DisciplinaWhereInput | boolean
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutMetricasInput, DisciplinaUpdateWithoutMetricasInput>, DisciplinaUncheckedUpdateWithoutMetricasInput>
  }

  export type HistoricoProgressoUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<HistoricoProgressoCreateWithoutDisciplinaInput, HistoricoProgressoUncheckedCreateWithoutDisciplinaInput> | HistoricoProgressoCreateWithoutDisciplinaInput[] | HistoricoProgressoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: HistoricoProgressoCreateOrConnectWithoutDisciplinaInput | HistoricoProgressoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: HistoricoProgressoUpsertWithWhereUniqueWithoutDisciplinaInput | HistoricoProgressoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: HistoricoProgressoCreateManyDisciplinaInputEnvelope
    set?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
    disconnect?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
    delete?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
    connect?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
    update?: HistoricoProgressoUpdateWithWhereUniqueWithoutDisciplinaInput | HistoricoProgressoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: HistoricoProgressoUpdateManyWithWhereWithoutDisciplinaInput | HistoricoProgressoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: HistoricoProgressoScalarWhereInput | HistoricoProgressoScalarWhereInput[]
  }

  export type HistoricoProgressoUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<HistoricoProgressoCreateWithoutDisciplinaInput, HistoricoProgressoUncheckedCreateWithoutDisciplinaInput> | HistoricoProgressoCreateWithoutDisciplinaInput[] | HistoricoProgressoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: HistoricoProgressoCreateOrConnectWithoutDisciplinaInput | HistoricoProgressoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: HistoricoProgressoUpsertWithWhereUniqueWithoutDisciplinaInput | HistoricoProgressoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: HistoricoProgressoCreateManyDisciplinaInputEnvelope
    set?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
    disconnect?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
    delete?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
    connect?: HistoricoProgressoWhereUniqueInput | HistoricoProgressoWhereUniqueInput[]
    update?: HistoricoProgressoUpdateWithWhereUniqueWithoutDisciplinaInput | HistoricoProgressoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: HistoricoProgressoUpdateManyWithWhereWithoutDisciplinaInput | HistoricoProgressoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: HistoricoProgressoScalarWhereInput | HistoricoProgressoScalarWhereInput[]
  }

  export type MetricaDisciplinaCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutHistoricoInput, MetricaDisciplinaUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutHistoricoInput
    connect?: MetricaDisciplinaWhereUniqueInput
  }

  export type MetricaDisciplinaUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutHistoricoInput, MetricaDisciplinaUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutHistoricoInput
    upsert?: MetricaDisciplinaUpsertWithoutHistoricoInput
    connect?: MetricaDisciplinaWhereUniqueInput
    update?: XOR<XOR<MetricaDisciplinaUpdateToOneWithWhereWithoutHistoricoInput, MetricaDisciplinaUpdateWithoutHistoricoInput>, MetricaDisciplinaUncheckedUpdateWithoutHistoricoInput>
  }

  export type ConteudoCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<ConteudoCreateWithoutDisciplinaInput, ConteudoUncheckedCreateWithoutDisciplinaInput> | ConteudoCreateWithoutDisciplinaInput[] | ConteudoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutDisciplinaInput | ConteudoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: ConteudoCreateManyDisciplinaInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type MetricaDisciplinaCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutDisciplinaInput, MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput> | MetricaDisciplinaCreateWithoutDisciplinaInput[] | MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput | MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: MetricaDisciplinaCreateManyDisciplinaInputEnvelope
    connect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<AtividadeCreateWithoutDisciplinaInput, AtividadeUncheckedCreateWithoutDisciplinaInput> | AtividadeCreateWithoutDisciplinaInput[] | AtividadeUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutDisciplinaInput | AtividadeCreateOrConnectWithoutDisciplinaInput[]
    createMany?: AtividadeCreateManyDisciplinaInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type HorarioEstudoCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<HorarioEstudoCreateWithoutDisciplinaInput, HorarioEstudoUncheckedCreateWithoutDisciplinaInput> | HorarioEstudoCreateWithoutDisciplinaInput[] | HorarioEstudoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: HorarioEstudoCreateOrConnectWithoutDisciplinaInput | HorarioEstudoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: HorarioEstudoCreateManyDisciplinaInputEnvelope
    connect?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
  }

  export type ConteudoUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<ConteudoCreateWithoutDisciplinaInput, ConteudoUncheckedCreateWithoutDisciplinaInput> | ConteudoCreateWithoutDisciplinaInput[] | ConteudoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutDisciplinaInput | ConteudoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: ConteudoCreateManyDisciplinaInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type MetricaDisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutDisciplinaInput, MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput> | MetricaDisciplinaCreateWithoutDisciplinaInput[] | MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput | MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: MetricaDisciplinaCreateManyDisciplinaInputEnvelope
    connect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<AtividadeCreateWithoutDisciplinaInput, AtividadeUncheckedCreateWithoutDisciplinaInput> | AtividadeCreateWithoutDisciplinaInput[] | AtividadeUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutDisciplinaInput | AtividadeCreateOrConnectWithoutDisciplinaInput[]
    createMany?: AtividadeCreateManyDisciplinaInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type HorarioEstudoUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<HorarioEstudoCreateWithoutDisciplinaInput, HorarioEstudoUncheckedCreateWithoutDisciplinaInput> | HorarioEstudoCreateWithoutDisciplinaInput[] | HorarioEstudoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: HorarioEstudoCreateOrConnectWithoutDisciplinaInput | HorarioEstudoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: HorarioEstudoCreateManyDisciplinaInputEnvelope
    connect?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
  }

  export type ConteudoUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<ConteudoCreateWithoutDisciplinaInput, ConteudoUncheckedCreateWithoutDisciplinaInput> | ConteudoCreateWithoutDisciplinaInput[] | ConteudoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutDisciplinaInput | ConteudoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutDisciplinaInput | ConteudoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: ConteudoCreateManyDisciplinaInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutDisciplinaInput | ConteudoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutDisciplinaInput | ConteudoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type MetricaDisciplinaUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutDisciplinaInput, MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput> | MetricaDisciplinaCreateWithoutDisciplinaInput[] | MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput | MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: MetricaDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput | MetricaDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: MetricaDisciplinaCreateManyDisciplinaInputEnvelope
    set?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    disconnect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    delete?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    connect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    update?: MetricaDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput | MetricaDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: MetricaDisciplinaUpdateManyWithWhereWithoutDisciplinaInput | MetricaDisciplinaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: MetricaDisciplinaScalarWhereInput | MetricaDisciplinaScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<AtividadeCreateWithoutDisciplinaInput, AtividadeUncheckedCreateWithoutDisciplinaInput> | AtividadeCreateWithoutDisciplinaInput[] | AtividadeUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutDisciplinaInput | AtividadeCreateOrConnectWithoutDisciplinaInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutDisciplinaInput | AtividadeUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: AtividadeCreateManyDisciplinaInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutDisciplinaInput | AtividadeUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutDisciplinaInput | AtividadeUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type HorarioEstudoUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<HorarioEstudoCreateWithoutDisciplinaInput, HorarioEstudoUncheckedCreateWithoutDisciplinaInput> | HorarioEstudoCreateWithoutDisciplinaInput[] | HorarioEstudoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: HorarioEstudoCreateOrConnectWithoutDisciplinaInput | HorarioEstudoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: HorarioEstudoUpsertWithWhereUniqueWithoutDisciplinaInput | HorarioEstudoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: HorarioEstudoCreateManyDisciplinaInputEnvelope
    set?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
    disconnect?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
    delete?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
    connect?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
    update?: HorarioEstudoUpdateWithWhereUniqueWithoutDisciplinaInput | HorarioEstudoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: HorarioEstudoUpdateManyWithWhereWithoutDisciplinaInput | HorarioEstudoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: HorarioEstudoScalarWhereInput | HorarioEstudoScalarWhereInput[]
  }

  export type ConteudoUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<ConteudoCreateWithoutDisciplinaInput, ConteudoUncheckedCreateWithoutDisciplinaInput> | ConteudoCreateWithoutDisciplinaInput[] | ConteudoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutDisciplinaInput | ConteudoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutDisciplinaInput | ConteudoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: ConteudoCreateManyDisciplinaInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutDisciplinaInput | ConteudoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutDisciplinaInput | ConteudoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type MetricaDisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<MetricaDisciplinaCreateWithoutDisciplinaInput, MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput> | MetricaDisciplinaCreateWithoutDisciplinaInput[] | MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput | MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: MetricaDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput | MetricaDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: MetricaDisciplinaCreateManyDisciplinaInputEnvelope
    set?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    disconnect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    delete?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    connect?: MetricaDisciplinaWhereUniqueInput | MetricaDisciplinaWhereUniqueInput[]
    update?: MetricaDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput | MetricaDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: MetricaDisciplinaUpdateManyWithWhereWithoutDisciplinaInput | MetricaDisciplinaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: MetricaDisciplinaScalarWhereInput | MetricaDisciplinaScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<AtividadeCreateWithoutDisciplinaInput, AtividadeUncheckedCreateWithoutDisciplinaInput> | AtividadeCreateWithoutDisciplinaInput[] | AtividadeUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutDisciplinaInput | AtividadeCreateOrConnectWithoutDisciplinaInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutDisciplinaInput | AtividadeUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: AtividadeCreateManyDisciplinaInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutDisciplinaInput | AtividadeUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutDisciplinaInput | AtividadeUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type HorarioEstudoUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<HorarioEstudoCreateWithoutDisciplinaInput, HorarioEstudoUncheckedCreateWithoutDisciplinaInput> | HorarioEstudoCreateWithoutDisciplinaInput[] | HorarioEstudoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: HorarioEstudoCreateOrConnectWithoutDisciplinaInput | HorarioEstudoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: HorarioEstudoUpsertWithWhereUniqueWithoutDisciplinaInput | HorarioEstudoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: HorarioEstudoCreateManyDisciplinaInputEnvelope
    set?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
    disconnect?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
    delete?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
    connect?: HorarioEstudoWhereUniqueInput | HorarioEstudoWhereUniqueInput[]
    update?: HorarioEstudoUpdateWithWhereUniqueWithoutDisciplinaInput | HorarioEstudoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: HorarioEstudoUpdateManyWithWhereWithoutDisciplinaInput | HorarioEstudoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: HorarioEstudoScalarWhereInput | HorarioEstudoScalarWhereInput[]
  }

  export type DisciplinaCreateNestedOneWithoutConteudosInput = {
    create?: XOR<DisciplinaCreateWithoutConteudosInput, DisciplinaUncheckedCreateWithoutConteudosInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutConteudosInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type DisciplinaUpdateOneRequiredWithoutConteudosNestedInput = {
    create?: XOR<DisciplinaCreateWithoutConteudosInput, DisciplinaUncheckedCreateWithoutConteudosInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutConteudosInput
    upsert?: DisciplinaUpsertWithoutConteudosInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutConteudosInput, DisciplinaUpdateWithoutConteudosInput>, DisciplinaUncheckedUpdateWithoutConteudosInput>
  }

  export type DisciplinaCreateNestedOneWithoutHorariosInput = {
    create?: XOR<DisciplinaCreateWithoutHorariosInput, DisciplinaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutHorariosInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type DisciplinaUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<DisciplinaCreateWithoutHorariosInput, DisciplinaUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutHorariosInput
    upsert?: DisciplinaUpsertWithoutHorariosInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutHorariosInput, DisciplinaUpdateWithoutHorariosInput>, DisciplinaUncheckedUpdateWithoutHorariosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAtividadeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AtividadeStatus | EnumAtividadeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AtividadeStatus[] | ListEnumAtividadeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AtividadeStatus[] | ListEnumAtividadeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAtividadeStatusFilter<$PrismaModel> | $Enums.AtividadeStatus
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

  export type NestedEnumAtividadeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AtividadeStatus | EnumAtividadeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AtividadeStatus[] | ListEnumAtividadeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AtividadeStatus[] | ListEnumAtividadeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAtividadeStatusWithAggregatesFilter<$PrismaModel> | $Enums.AtividadeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAtividadeStatusFilter<$PrismaModel>
    _max?: NestedEnumAtividadeStatusFilter<$PrismaModel>
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

  export type ObjetivoCreateWithoutDashboardInput = {
    id?: string
    descricao: string
    completo?: boolean
  }

  export type ObjetivoUncheckedCreateWithoutDashboardInput = {
    id?: string
    descricao: string
    completo?: boolean
  }

  export type ObjetivoCreateOrConnectWithoutDashboardInput = {
    where: ObjetivoWhereUniqueInput
    create: XOR<ObjetivoCreateWithoutDashboardInput, ObjetivoUncheckedCreateWithoutDashboardInput>
  }

  export type ObjetivoCreateManyDashboardInputEnvelope = {
    data: ObjetivoCreateManyDashboardInput | ObjetivoCreateManyDashboardInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutDashboardInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    disciplina?: DisciplinaCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateWithoutDashboardInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    disciplinaId?: string | null
  }

  export type AtividadeCreateOrConnectWithoutDashboardInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutDashboardInput, AtividadeUncheckedCreateWithoutDashboardInput>
  }

  export type AtividadeCreateManyDashboardInputEnvelope = {
    data: AtividadeCreateManyDashboardInput | AtividadeCreateManyDashboardInput[]
    skipDuplicates?: boolean
  }

  export type MetricaDisciplinaCreateWithoutDashboardInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    disciplina?: DisciplinaCreateNestedOneWithoutMetricasInput
    historico?: HistoricoProgressoCreateNestedManyWithoutDisciplinaInput
  }

  export type MetricaDisciplinaUncheckedCreateWithoutDashboardInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    disciplinaId?: string | null
    historico?: HistoricoProgressoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type MetricaDisciplinaCreateOrConnectWithoutDashboardInput = {
    where: MetricaDisciplinaWhereUniqueInput
    create: XOR<MetricaDisciplinaCreateWithoutDashboardInput, MetricaDisciplinaUncheckedCreateWithoutDashboardInput>
  }

  export type MetricaDisciplinaCreateManyDashboardInputEnvelope = {
    data: MetricaDisciplinaCreateManyDashboardInput | MetricaDisciplinaCreateManyDashboardInput[]
    skipDuplicates?: boolean
  }

  export type ObjetivoUpsertWithWhereUniqueWithoutDashboardInput = {
    where: ObjetivoWhereUniqueInput
    update: XOR<ObjetivoUpdateWithoutDashboardInput, ObjetivoUncheckedUpdateWithoutDashboardInput>
    create: XOR<ObjetivoCreateWithoutDashboardInput, ObjetivoUncheckedCreateWithoutDashboardInput>
  }

  export type ObjetivoUpdateWithWhereUniqueWithoutDashboardInput = {
    where: ObjetivoWhereUniqueInput
    data: XOR<ObjetivoUpdateWithoutDashboardInput, ObjetivoUncheckedUpdateWithoutDashboardInput>
  }

  export type ObjetivoUpdateManyWithWhereWithoutDashboardInput = {
    where: ObjetivoScalarWhereInput
    data: XOR<ObjetivoUpdateManyMutationInput, ObjetivoUncheckedUpdateManyWithoutDashboardInput>
  }

  export type ObjetivoScalarWhereInput = {
    AND?: ObjetivoScalarWhereInput | ObjetivoScalarWhereInput[]
    OR?: ObjetivoScalarWhereInput[]
    NOT?: ObjetivoScalarWhereInput | ObjetivoScalarWhereInput[]
    id?: StringFilter<"Objetivo"> | string
    descricao?: StringFilter<"Objetivo"> | string
    completo?: BoolFilter<"Objetivo"> | boolean
    dashboardId?: StringFilter<"Objetivo"> | string
  }

  export type AtividadeUpsertWithWhereUniqueWithoutDashboardInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutDashboardInput, AtividadeUncheckedUpdateWithoutDashboardInput>
    create: XOR<AtividadeCreateWithoutDashboardInput, AtividadeUncheckedCreateWithoutDashboardInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutDashboardInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutDashboardInput, AtividadeUncheckedUpdateWithoutDashboardInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutDashboardInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutDashboardInput>
  }

  export type AtividadeScalarWhereInput = {
    AND?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    OR?: AtividadeScalarWhereInput[]
    NOT?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    id?: StringFilter<"Atividade"> | string
    horario?: StringFilter<"Atividade"> | string
    atividade?: StringFilter<"Atividade"> | string
    status?: EnumAtividadeStatusFilter<"Atividade"> | $Enums.AtividadeStatus
    dashboardId?: StringFilter<"Atividade"> | string
    disciplinaId?: StringNullableFilter<"Atividade"> | string | null
  }

  export type MetricaDisciplinaUpsertWithWhereUniqueWithoutDashboardInput = {
    where: MetricaDisciplinaWhereUniqueInput
    update: XOR<MetricaDisciplinaUpdateWithoutDashboardInput, MetricaDisciplinaUncheckedUpdateWithoutDashboardInput>
    create: XOR<MetricaDisciplinaCreateWithoutDashboardInput, MetricaDisciplinaUncheckedCreateWithoutDashboardInput>
  }

  export type MetricaDisciplinaUpdateWithWhereUniqueWithoutDashboardInput = {
    where: MetricaDisciplinaWhereUniqueInput
    data: XOR<MetricaDisciplinaUpdateWithoutDashboardInput, MetricaDisciplinaUncheckedUpdateWithoutDashboardInput>
  }

  export type MetricaDisciplinaUpdateManyWithWhereWithoutDashboardInput = {
    where: MetricaDisciplinaScalarWhereInput
    data: XOR<MetricaDisciplinaUpdateManyMutationInput, MetricaDisciplinaUncheckedUpdateManyWithoutDashboardInput>
  }

  export type MetricaDisciplinaScalarWhereInput = {
    AND?: MetricaDisciplinaScalarWhereInput | MetricaDisciplinaScalarWhereInput[]
    OR?: MetricaDisciplinaScalarWhereInput[]
    NOT?: MetricaDisciplinaScalarWhereInput | MetricaDisciplinaScalarWhereInput[]
    id?: StringFilter<"MetricaDisciplina"> | string
    nome?: StringFilter<"MetricaDisciplina"> | string
    progresso?: IntFilter<"MetricaDisciplina"> | number
    cor?: StringFilter<"MetricaDisciplina"> | string
    dashboardId?: StringFilter<"MetricaDisciplina"> | string
    disciplinaId?: StringNullableFilter<"MetricaDisciplina"> | string | null
  }

  export type DailyDashboardCreateWithoutObjetivosInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
    cronograma?: AtividadeCreateNestedManyWithoutDashboardInput
    metricas?: MetricaDisciplinaCreateNestedManyWithoutDashboardInput
  }

  export type DailyDashboardUncheckedCreateWithoutObjetivosInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
    cronograma?: AtividadeUncheckedCreateNestedManyWithoutDashboardInput
    metricas?: MetricaDisciplinaUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DailyDashboardCreateOrConnectWithoutObjetivosInput = {
    where: DailyDashboardWhereUniqueInput
    create: XOR<DailyDashboardCreateWithoutObjetivosInput, DailyDashboardUncheckedCreateWithoutObjetivosInput>
  }

  export type DailyDashboardUpsertWithoutObjetivosInput = {
    update: XOR<DailyDashboardUpdateWithoutObjetivosInput, DailyDashboardUncheckedUpdateWithoutObjetivosInput>
    create: XOR<DailyDashboardCreateWithoutObjetivosInput, DailyDashboardUncheckedCreateWithoutObjetivosInput>
    where?: DailyDashboardWhereInput
  }

  export type DailyDashboardUpdateToOneWithWhereWithoutObjetivosInput = {
    where?: DailyDashboardWhereInput
    data: XOR<DailyDashboardUpdateWithoutObjetivosInput, DailyDashboardUncheckedUpdateWithoutObjetivosInput>
  }

  export type DailyDashboardUpdateWithoutObjetivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
    cronograma?: AtividadeUpdateManyWithoutDashboardNestedInput
    metricas?: MetricaDisciplinaUpdateManyWithoutDashboardNestedInput
  }

  export type DailyDashboardUncheckedUpdateWithoutObjetivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
    cronograma?: AtividadeUncheckedUpdateManyWithoutDashboardNestedInput
    metricas?: MetricaDisciplinaUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DailyDashboardCreateWithoutCronogramaInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
    objetivos?: ObjetivoCreateNestedManyWithoutDashboardInput
    metricas?: MetricaDisciplinaCreateNestedManyWithoutDashboardInput
  }

  export type DailyDashboardUncheckedCreateWithoutCronogramaInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
    objetivos?: ObjetivoUncheckedCreateNestedManyWithoutDashboardInput
    metricas?: MetricaDisciplinaUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DailyDashboardCreateOrConnectWithoutCronogramaInput = {
    where: DailyDashboardWhereUniqueInput
    create: XOR<DailyDashboardCreateWithoutCronogramaInput, DailyDashboardUncheckedCreateWithoutCronogramaInput>
  }

  export type DisciplinaCreateWithoutAtividadesInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conteudos?: ConteudoCreateNestedManyWithoutDisciplinaInput
    metricas?: MetricaDisciplinaCreateNestedManyWithoutDisciplinaInput
    horarios?: HorarioEstudoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutAtividadesInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conteudos?: ConteudoUncheckedCreateNestedManyWithoutDisciplinaInput
    metricas?: MetricaDisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput
    horarios?: HorarioEstudoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutAtividadesInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutAtividadesInput, DisciplinaUncheckedCreateWithoutAtividadesInput>
  }

  export type DailyDashboardUpsertWithoutCronogramaInput = {
    update: XOR<DailyDashboardUpdateWithoutCronogramaInput, DailyDashboardUncheckedUpdateWithoutCronogramaInput>
    create: XOR<DailyDashboardCreateWithoutCronogramaInput, DailyDashboardUncheckedCreateWithoutCronogramaInput>
    where?: DailyDashboardWhereInput
  }

  export type DailyDashboardUpdateToOneWithWhereWithoutCronogramaInput = {
    where?: DailyDashboardWhereInput
    data: XOR<DailyDashboardUpdateWithoutCronogramaInput, DailyDashboardUncheckedUpdateWithoutCronogramaInput>
  }

  export type DailyDashboardUpdateWithoutCronogramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
    objetivos?: ObjetivoUpdateManyWithoutDashboardNestedInput
    metricas?: MetricaDisciplinaUpdateManyWithoutDashboardNestedInput
  }

  export type DailyDashboardUncheckedUpdateWithoutCronogramaInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
    objetivos?: ObjetivoUncheckedUpdateManyWithoutDashboardNestedInput
    metricas?: MetricaDisciplinaUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DisciplinaUpsertWithoutAtividadesInput = {
    update: XOR<DisciplinaUpdateWithoutAtividadesInput, DisciplinaUncheckedUpdateWithoutAtividadesInput>
    create: XOR<DisciplinaCreateWithoutAtividadesInput, DisciplinaUncheckedCreateWithoutAtividadesInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutAtividadesInput, DisciplinaUncheckedUpdateWithoutAtividadesInput>
  }

  export type DisciplinaUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudos?: ConteudoUpdateManyWithoutDisciplinaNestedInput
    metricas?: MetricaDisciplinaUpdateManyWithoutDisciplinaNestedInput
    horarios?: HorarioEstudoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutAtividadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudos?: ConteudoUncheckedUpdateManyWithoutDisciplinaNestedInput
    metricas?: MetricaDisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput
    horarios?: HorarioEstudoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DailyDashboardCreateWithoutMetricasInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
    objetivos?: ObjetivoCreateNestedManyWithoutDashboardInput
    cronograma?: AtividadeCreateNestedManyWithoutDashboardInput
  }

  export type DailyDashboardUncheckedCreateWithoutMetricasInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    proximosConteudos?: DailyDashboardCreateproximosConteudosInput | string[]
    objetivos?: ObjetivoUncheckedCreateNestedManyWithoutDashboardInput
    cronograma?: AtividadeUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DailyDashboardCreateOrConnectWithoutMetricasInput = {
    where: DailyDashboardWhereUniqueInput
    create: XOR<DailyDashboardCreateWithoutMetricasInput, DailyDashboardUncheckedCreateWithoutMetricasInput>
  }

  export type DisciplinaCreateWithoutMetricasInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conteudos?: ConteudoCreateNestedManyWithoutDisciplinaInput
    atividades?: AtividadeCreateNestedManyWithoutDisciplinaInput
    horarios?: HorarioEstudoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutMetricasInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conteudos?: ConteudoUncheckedCreateNestedManyWithoutDisciplinaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutDisciplinaInput
    horarios?: HorarioEstudoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutMetricasInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutMetricasInput, DisciplinaUncheckedCreateWithoutMetricasInput>
  }

  export type HistoricoProgressoCreateWithoutDisciplinaInput = {
    id?: string
    data?: Date | string
    progresso: number
    observacoes?: string | null
  }

  export type HistoricoProgressoUncheckedCreateWithoutDisciplinaInput = {
    id?: string
    data?: Date | string
    progresso: number
    observacoes?: string | null
  }

  export type HistoricoProgressoCreateOrConnectWithoutDisciplinaInput = {
    where: HistoricoProgressoWhereUniqueInput
    create: XOR<HistoricoProgressoCreateWithoutDisciplinaInput, HistoricoProgressoUncheckedCreateWithoutDisciplinaInput>
  }

  export type HistoricoProgressoCreateManyDisciplinaInputEnvelope = {
    data: HistoricoProgressoCreateManyDisciplinaInput | HistoricoProgressoCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type DailyDashboardUpsertWithoutMetricasInput = {
    update: XOR<DailyDashboardUpdateWithoutMetricasInput, DailyDashboardUncheckedUpdateWithoutMetricasInput>
    create: XOR<DailyDashboardCreateWithoutMetricasInput, DailyDashboardUncheckedCreateWithoutMetricasInput>
    where?: DailyDashboardWhereInput
  }

  export type DailyDashboardUpdateToOneWithWhereWithoutMetricasInput = {
    where?: DailyDashboardWhereInput
    data: XOR<DailyDashboardUpdateWithoutMetricasInput, DailyDashboardUncheckedUpdateWithoutMetricasInput>
  }

  export type DailyDashboardUpdateWithoutMetricasInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
    objetivos?: ObjetivoUpdateManyWithoutDashboardNestedInput
    cronograma?: AtividadeUpdateManyWithoutDashboardNestedInput
  }

  export type DailyDashboardUncheckedUpdateWithoutMetricasInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proximosConteudos?: DailyDashboardUpdateproximosConteudosInput | string[]
    objetivos?: ObjetivoUncheckedUpdateManyWithoutDashboardNestedInput
    cronograma?: AtividadeUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DisciplinaUpsertWithoutMetricasInput = {
    update: XOR<DisciplinaUpdateWithoutMetricasInput, DisciplinaUncheckedUpdateWithoutMetricasInput>
    create: XOR<DisciplinaCreateWithoutMetricasInput, DisciplinaUncheckedCreateWithoutMetricasInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutMetricasInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutMetricasInput, DisciplinaUncheckedUpdateWithoutMetricasInput>
  }

  export type DisciplinaUpdateWithoutMetricasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudos?: ConteudoUpdateManyWithoutDisciplinaNestedInput
    atividades?: AtividadeUpdateManyWithoutDisciplinaNestedInput
    horarios?: HorarioEstudoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutMetricasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudos?: ConteudoUncheckedUpdateManyWithoutDisciplinaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutDisciplinaNestedInput
    horarios?: HorarioEstudoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type HistoricoProgressoUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: HistoricoProgressoWhereUniqueInput
    update: XOR<HistoricoProgressoUpdateWithoutDisciplinaInput, HistoricoProgressoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<HistoricoProgressoCreateWithoutDisciplinaInput, HistoricoProgressoUncheckedCreateWithoutDisciplinaInput>
  }

  export type HistoricoProgressoUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: HistoricoProgressoWhereUniqueInput
    data: XOR<HistoricoProgressoUpdateWithoutDisciplinaInput, HistoricoProgressoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type HistoricoProgressoUpdateManyWithWhereWithoutDisciplinaInput = {
    where: HistoricoProgressoScalarWhereInput
    data: XOR<HistoricoProgressoUpdateManyMutationInput, HistoricoProgressoUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type HistoricoProgressoScalarWhereInput = {
    AND?: HistoricoProgressoScalarWhereInput | HistoricoProgressoScalarWhereInput[]
    OR?: HistoricoProgressoScalarWhereInput[]
    NOT?: HistoricoProgressoScalarWhereInput | HistoricoProgressoScalarWhereInput[]
    id?: StringFilter<"HistoricoProgresso"> | string
    data?: DateTimeFilter<"HistoricoProgresso"> | Date | string
    progresso?: IntFilter<"HistoricoProgresso"> | number
    observacoes?: StringNullableFilter<"HistoricoProgresso"> | string | null
    disciplinaId?: StringFilter<"HistoricoProgresso"> | string
  }

  export type MetricaDisciplinaCreateWithoutHistoricoInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    dashboard: DailyDashboardCreateNestedOneWithoutMetricasInput
    disciplina?: DisciplinaCreateNestedOneWithoutMetricasInput
  }

  export type MetricaDisciplinaUncheckedCreateWithoutHistoricoInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    dashboardId: string
    disciplinaId?: string | null
  }

  export type MetricaDisciplinaCreateOrConnectWithoutHistoricoInput = {
    where: MetricaDisciplinaWhereUniqueInput
    create: XOR<MetricaDisciplinaCreateWithoutHistoricoInput, MetricaDisciplinaUncheckedCreateWithoutHistoricoInput>
  }

  export type MetricaDisciplinaUpsertWithoutHistoricoInput = {
    update: XOR<MetricaDisciplinaUpdateWithoutHistoricoInput, MetricaDisciplinaUncheckedUpdateWithoutHistoricoInput>
    create: XOR<MetricaDisciplinaCreateWithoutHistoricoInput, MetricaDisciplinaUncheckedCreateWithoutHistoricoInput>
    where?: MetricaDisciplinaWhereInput
  }

  export type MetricaDisciplinaUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: MetricaDisciplinaWhereInput
    data: XOR<MetricaDisciplinaUpdateWithoutHistoricoInput, MetricaDisciplinaUncheckedUpdateWithoutHistoricoInput>
  }

  export type MetricaDisciplinaUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    dashboard?: DailyDashboardUpdateOneRequiredWithoutMetricasNestedInput
    disciplina?: DisciplinaUpdateOneWithoutMetricasNestedInput
  }

  export type MetricaDisciplinaUncheckedUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConteudoCreateWithoutDisciplinaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem: number
    completo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConteudoUncheckedCreateWithoutDisciplinaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem: number
    completo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConteudoCreateOrConnectWithoutDisciplinaInput = {
    where: ConteudoWhereUniqueInput
    create: XOR<ConteudoCreateWithoutDisciplinaInput, ConteudoUncheckedCreateWithoutDisciplinaInput>
  }

  export type ConteudoCreateManyDisciplinaInputEnvelope = {
    data: ConteudoCreateManyDisciplinaInput | ConteudoCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type MetricaDisciplinaCreateWithoutDisciplinaInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    dashboard: DailyDashboardCreateNestedOneWithoutMetricasInput
    historico?: HistoricoProgressoCreateNestedManyWithoutDisciplinaInput
  }

  export type MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    dashboardId: string
    historico?: HistoricoProgressoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type MetricaDisciplinaCreateOrConnectWithoutDisciplinaInput = {
    where: MetricaDisciplinaWhereUniqueInput
    create: XOR<MetricaDisciplinaCreateWithoutDisciplinaInput, MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput>
  }

  export type MetricaDisciplinaCreateManyDisciplinaInputEnvelope = {
    data: MetricaDisciplinaCreateManyDisciplinaInput | MetricaDisciplinaCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutDisciplinaInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    dashboard: DailyDashboardCreateNestedOneWithoutCronogramaInput
  }

  export type AtividadeUncheckedCreateWithoutDisciplinaInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    dashboardId: string
  }

  export type AtividadeCreateOrConnectWithoutDisciplinaInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutDisciplinaInput, AtividadeUncheckedCreateWithoutDisciplinaInput>
  }

  export type AtividadeCreateManyDisciplinaInputEnvelope = {
    data: AtividadeCreateManyDisciplinaInput | AtividadeCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type HorarioEstudoCreateWithoutDisciplinaInput = {
    id?: string
    diaSemana: number
    inicio: string
    fim: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioEstudoUncheckedCreateWithoutDisciplinaInput = {
    id?: string
    diaSemana: number
    inicio: string
    fim: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioEstudoCreateOrConnectWithoutDisciplinaInput = {
    where: HorarioEstudoWhereUniqueInput
    create: XOR<HorarioEstudoCreateWithoutDisciplinaInput, HorarioEstudoUncheckedCreateWithoutDisciplinaInput>
  }

  export type HorarioEstudoCreateManyDisciplinaInputEnvelope = {
    data: HorarioEstudoCreateManyDisciplinaInput | HorarioEstudoCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type ConteudoUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: ConteudoWhereUniqueInput
    update: XOR<ConteudoUpdateWithoutDisciplinaInput, ConteudoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<ConteudoCreateWithoutDisciplinaInput, ConteudoUncheckedCreateWithoutDisciplinaInput>
  }

  export type ConteudoUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: ConteudoWhereUniqueInput
    data: XOR<ConteudoUpdateWithoutDisciplinaInput, ConteudoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type ConteudoUpdateManyWithWhereWithoutDisciplinaInput = {
    where: ConteudoScalarWhereInput
    data: XOR<ConteudoUpdateManyMutationInput, ConteudoUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type ConteudoScalarWhereInput = {
    AND?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
    OR?: ConteudoScalarWhereInput[]
    NOT?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
    id?: StringFilter<"Conteudo"> | string
    titulo?: StringFilter<"Conteudo"> | string
    descricao?: StringNullableFilter<"Conteudo"> | string | null
    ordem?: IntFilter<"Conteudo"> | number
    completo?: BoolFilter<"Conteudo"> | boolean
    disciplinaId?: StringFilter<"Conteudo"> | string
    createdAt?: DateTimeFilter<"Conteudo"> | Date | string
    updatedAt?: DateTimeFilter<"Conteudo"> | Date | string
  }

  export type MetricaDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: MetricaDisciplinaWhereUniqueInput
    update: XOR<MetricaDisciplinaUpdateWithoutDisciplinaInput, MetricaDisciplinaUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<MetricaDisciplinaCreateWithoutDisciplinaInput, MetricaDisciplinaUncheckedCreateWithoutDisciplinaInput>
  }

  export type MetricaDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: MetricaDisciplinaWhereUniqueInput
    data: XOR<MetricaDisciplinaUpdateWithoutDisciplinaInput, MetricaDisciplinaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type MetricaDisciplinaUpdateManyWithWhereWithoutDisciplinaInput = {
    where: MetricaDisciplinaScalarWhereInput
    data: XOR<MetricaDisciplinaUpdateManyMutationInput, MetricaDisciplinaUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type AtividadeUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutDisciplinaInput, AtividadeUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<AtividadeCreateWithoutDisciplinaInput, AtividadeUncheckedCreateWithoutDisciplinaInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutDisciplinaInput, AtividadeUncheckedUpdateWithoutDisciplinaInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutDisciplinaInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type HorarioEstudoUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: HorarioEstudoWhereUniqueInput
    update: XOR<HorarioEstudoUpdateWithoutDisciplinaInput, HorarioEstudoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<HorarioEstudoCreateWithoutDisciplinaInput, HorarioEstudoUncheckedCreateWithoutDisciplinaInput>
  }

  export type HorarioEstudoUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: HorarioEstudoWhereUniqueInput
    data: XOR<HorarioEstudoUpdateWithoutDisciplinaInput, HorarioEstudoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type HorarioEstudoUpdateManyWithWhereWithoutDisciplinaInput = {
    where: HorarioEstudoScalarWhereInput
    data: XOR<HorarioEstudoUpdateManyMutationInput, HorarioEstudoUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type HorarioEstudoScalarWhereInput = {
    AND?: HorarioEstudoScalarWhereInput | HorarioEstudoScalarWhereInput[]
    OR?: HorarioEstudoScalarWhereInput[]
    NOT?: HorarioEstudoScalarWhereInput | HorarioEstudoScalarWhereInput[]
    id?: StringFilter<"HorarioEstudo"> | string
    diaSemana?: IntFilter<"HorarioEstudo"> | number
    inicio?: StringFilter<"HorarioEstudo"> | string
    fim?: StringFilter<"HorarioEstudo"> | string
    ativo?: BoolFilter<"HorarioEstudo"> | boolean
    createdAt?: DateTimeFilter<"HorarioEstudo"> | Date | string
    updatedAt?: DateTimeFilter<"HorarioEstudo"> | Date | string
    disciplinaId?: StringFilter<"HorarioEstudo"> | string
  }

  export type DisciplinaCreateWithoutConteudosInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metricas?: MetricaDisciplinaCreateNestedManyWithoutDisciplinaInput
    atividades?: AtividadeCreateNestedManyWithoutDisciplinaInput
    horarios?: HorarioEstudoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutConteudosInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metricas?: MetricaDisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutDisciplinaInput
    horarios?: HorarioEstudoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutConteudosInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutConteudosInput, DisciplinaUncheckedCreateWithoutConteudosInput>
  }

  export type DisciplinaUpsertWithoutConteudosInput = {
    update: XOR<DisciplinaUpdateWithoutConteudosInput, DisciplinaUncheckedUpdateWithoutConteudosInput>
    create: XOR<DisciplinaCreateWithoutConteudosInput, DisciplinaUncheckedCreateWithoutConteudosInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutConteudosInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutConteudosInput, DisciplinaUncheckedUpdateWithoutConteudosInput>
  }

  export type DisciplinaUpdateWithoutConteudosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricas?: MetricaDisciplinaUpdateManyWithoutDisciplinaNestedInput
    atividades?: AtividadeUpdateManyWithoutDisciplinaNestedInput
    horarios?: HorarioEstudoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutConteudosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricas?: MetricaDisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutDisciplinaNestedInput
    horarios?: HorarioEstudoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaCreateWithoutHorariosInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conteudos?: ConteudoCreateNestedManyWithoutDisciplinaInput
    metricas?: MetricaDisciplinaCreateNestedManyWithoutDisciplinaInput
    atividades?: AtividadeCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutHorariosInput = {
    id?: string
    nome: string
    cor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conteudos?: ConteudoUncheckedCreateNestedManyWithoutDisciplinaInput
    metricas?: MetricaDisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutHorariosInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutHorariosInput, DisciplinaUncheckedCreateWithoutHorariosInput>
  }

  export type DisciplinaUpsertWithoutHorariosInput = {
    update: XOR<DisciplinaUpdateWithoutHorariosInput, DisciplinaUncheckedUpdateWithoutHorariosInput>
    create: XOR<DisciplinaCreateWithoutHorariosInput, DisciplinaUncheckedCreateWithoutHorariosInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutHorariosInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutHorariosInput, DisciplinaUncheckedUpdateWithoutHorariosInput>
  }

  export type DisciplinaUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudos?: ConteudoUpdateManyWithoutDisciplinaNestedInput
    metricas?: MetricaDisciplinaUpdateManyWithoutDisciplinaNestedInput
    atividades?: AtividadeUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudos?: ConteudoUncheckedUpdateManyWithoutDisciplinaNestedInput
    metricas?: MetricaDisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type ObjetivoCreateManyDashboardInput = {
    id?: string
    descricao: string
    completo?: boolean
  }

  export type AtividadeCreateManyDashboardInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    disciplinaId?: string | null
  }

  export type MetricaDisciplinaCreateManyDashboardInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    disciplinaId?: string | null
  }

  export type ObjetivoUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    completo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObjetivoUncheckedUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    completo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObjetivoUncheckedUpdateManyWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    completo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AtividadeUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    disciplina?: DisciplinaUpdateOneWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtividadeUncheckedUpdateManyWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetricaDisciplinaUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    disciplina?: DisciplinaUpdateOneWithoutMetricasNestedInput
    historico?: HistoricoProgressoUpdateManyWithoutDisciplinaNestedInput
  }

  export type MetricaDisciplinaUncheckedUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
    historico?: HistoricoProgressoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type MetricaDisciplinaUncheckedUpdateManyWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    disciplinaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoProgressoCreateManyDisciplinaInput = {
    id?: string
    data?: Date | string
    progresso: number
    observacoes?: string | null
  }

  export type HistoricoProgressoUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    progresso?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoProgressoUncheckedUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    progresso?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoProgressoUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    progresso?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConteudoCreateManyDisciplinaInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem: number
    completo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricaDisciplinaCreateManyDisciplinaInput = {
    id?: string
    nome: string
    progresso: number
    cor: string
    dashboardId: string
  }

  export type AtividadeCreateManyDisciplinaInput = {
    id?: string
    horario: string
    atividade: string
    status?: $Enums.AtividadeStatus
    dashboardId: string
  }

  export type HorarioEstudoCreateManyDisciplinaInput = {
    id?: string
    diaSemana: number
    inicio: string
    fim: string
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConteudoUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    completo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConteudoUncheckedUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    completo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConteudoUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    completo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricaDisciplinaUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    dashboard?: DailyDashboardUpdateOneRequiredWithoutMetricasNestedInput
    historico?: HistoricoProgressoUpdateManyWithoutDisciplinaNestedInput
  }

  export type MetricaDisciplinaUncheckedUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    historico?: HistoricoProgressoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type MetricaDisciplinaUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    dashboard?: DailyDashboardUpdateOneRequiredWithoutCronogramaNestedInput
  }

  export type AtividadeUncheckedUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    dashboardId?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    atividade?: StringFieldUpdateOperationsInput | string
    status?: EnumAtividadeStatusFieldUpdateOperationsInput | $Enums.AtividadeStatus
    dashboardId?: StringFieldUpdateOperationsInput | string
  }

  export type HorarioEstudoUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    inicio?: StringFieldUpdateOperationsInput | string
    fim?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioEstudoUncheckedUpdateWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    inicio?: StringFieldUpdateOperationsInput | string
    fim?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioEstudoUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    inicio?: StringFieldUpdateOperationsInput | string
    fim?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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